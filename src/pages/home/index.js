import BarFilters from 'components/bar-filters'
import BarMenu from 'components/bar-menu'
import CardProfile from 'components/card-profile'
import CardRepo from 'components/card-repo'
import React, { useEffect, useState } from 'react'
import { BoxLeft, BoxRigth, Container, Paginate } from './styled'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import LoadingCardRepo from 'components/loading-card-repo'

import Alert from 'components/alert'


const Home = () => {

  const dataReposUserGithub = useSelector((state) => state.sliceReposUserGithub)
  const dataUserGithub = useSelector((state) => state.sliceUserGithub)
  const [visibleBoxLeft, setVisibleBoxLeft] = useState(false)
  const [visibleBoxRigth, setVisibleBoxRigth] = useState(false)
  const [page, setPage] = useState(1)
  const [resetFilter, setResetFilter] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(getReposUserGithub({ user: dataUserGithub.data?.login }))

  }, [page])



  const paginateDataReposUserGithub = () => {

    let dataResponse = []
    let i = 0
    let size = 5

    while (i < dataReposUserGithub.dataFilters.length) {
      dataResponse.push(dataReposUserGithub.dataFilters.slice(i, i += size))
    }

    return dataResponse
  }


  useEffect(() => {
    if (dataUserGithub.loading) {
      toast.loading("Aguarde...", { toastId: 0 })
      setVisibleBoxLeft(false)
      setVisibleBoxRigth(false)
    } else {
      if (dataUserGithub.error) {
        if (dataUserGithub.data.status === 404) {
          toast.update(0, { render: "Perfil não encontrado.", type: "error", isLoading: false, autoClose: 1000 });
        } else {
          toast.update(0, { render: "Problemas ao buscar perfil.", type: "error", isLoading: false, autoClose: 1000 });
        }
        setVisibleBoxLeft(false)
      } else {
        toast.update(0, { render: dataUserGithub.data?.name, type: "success", isLoading: false, autoClose: 1000 });
        if (dataUserGithub.data !== null) setVisibleBoxLeft(true)
      }
    }
  }, [dataUserGithub])

  useEffect(() => {
    if (!visibleBoxLeft) {
      setVisibleBoxRigth(false)
    } else if (dataUserGithub.error) {
      toast("error")
      setVisibleBoxRigth(false)
    } else {
      if (dataUserGithub.data !== null) setVisibleBoxRigth(true)
    }

  }, [dataReposUserGithub])


  useEffect(() => {
    if (dataReposUserGithub.loading) {
      setPage(1)
    }
  }, [dataReposUserGithub])

  return (
    <>
      <BarMenu />
      <Alert text={"Primeiro pesquise um perfil do github e depois liste seus repositórios."} />
      <Container>
        {visibleBoxLeft &&
          <BoxLeft>
            <CardProfile setResetFilter={setResetFilter} />
          </BoxLeft>}

        {visibleBoxRigth &&
          <BoxRigth >
            <BarFilters resetFilter={resetFilter} />
            {dataReposUserGithub.loading ?
              Array(3).fill(<LoadingCardRepo />) :
              paginateDataReposUserGithub()[page - 1]?.map((item) => (<CardRepo key={item.id} item={item} />))
            }
            <Paginate>
              <IoIosArrowBack onClick={() => {
                if (page > 1) {
                  setPage(page - 1)
                }
              }} size={30} />
              <lable>{page}</lable>
              <IoIosArrowForward onClick={() => {
                if (paginateDataReposUserGithub().length > page) {
                  setPage(page + 1)
                }
              }} size={30} />
            </Paginate>
          </BoxRigth >}
      </Container>
    </>
  )
}

export default Home