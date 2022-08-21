import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFiltersSlice } from 'redux/slices/sliceReposUserGithub'
import { BoxLeft, BoxRigth, Container, Option, Search, SelectCustom } from './styled'
import { IoIosArrowDown } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";

const BarFilters = () => {

    const dispatch = useDispatch()
    const [openSelectOrder, setOpenSelectOrder] = useState(false)
    const [openSelectLanguage, setOpenSelectLanguage] = useState(false)
    const [filterLanguage, setFilterLanguage] = useState("all")
    const [filterIsDisabled, setFilterIsDisable] = useState(false)
    const [filterIsArchived, setFilterIsArchived] = useState(false)
    const [order, setOrder] = useState({ name: "full_name", type: "asc" })
    const [search, setSearch] = useState("")

    const dataReposUserGithub = useSelector((state) => state.sliceReposUserGithub)

    useEffect(() => {
        if (dataReposUserGithub.loading) {
            setFilterLanguage("all")
            setFilterIsDisable(false)
            setFilterIsArchived(false)
            setOrder({ name: "full_name", type: "asc" })
            setSearch("")
        }


    }, [dataReposUserGithub])

    useEffect(() => {
        dispatch(setFiltersSlice(
            {
                order: { name: order.name, type: order.type },
                language: filterLanguage,
                archived: filterIsArchived,
                disabled: filterIsDisabled,
                search: search
            }
        ))
    }, [filterLanguage, filterIsArchived, filterIsDisabled, order])

    const getSearch = () => {
     
        dispatch(setFiltersSlice(
            {
                order: { name: order.name, type: order.type },
                language: filterLanguage,
                archived: filterIsArchived,
                disabled: filterIsDisabled,
                search: search
            }
        ))
    }

    useEffect(() => {
        if (openSelectLanguage) {
            window.addEventListener('mouseup', () => { setOpenSelectLanguage(false) });
            return () => { window.removeEventListener('mouseup', () => { setOpenSelectLanguage(false) }) };
        }
        if (openSelectOrder) {
            window.addEventListener('mouseup', () => { setOpenSelectOrder(false) });
            return () => { window.removeEventListener('mouseup', () => { setOpenSelectOrder(false) }) };
        }
    }, [openSelectLanguage, openSelectOrder])

    const formatTextOrder = () => {
        if (order.name == "full_name" && order.type == "asc") return "Nome A - Z"
        if (order.name == "full_name" && order.type == "desc") return "Nome Z - A"
        if (order.name == "updated_at" && order.type == "asc") return "Atualização antiga"
        if (order.name == "updated_at" && order.type == "desc") return "Atualização recente"
        if (order.name == "created_at" && order.type == "asc") return "Antigos"
        if (order.name == "created_at" && order.type == "desc") return "Novos"
    }

    return (
        <Container>
            <BoxLeft>
                <Option onClick={() => { setFilterIsArchived(!filterIsArchived) }} active={filterIsArchived}>
                    <label>Arquivados</label>
                </Option>
                <Option onClick={() => { setFilterIsDisable(!filterIsDisabled) }} active={filterIsDisabled}>
                    <label>Desativados</label>
                </Option>
                <SelectCustom open={openSelectLanguage}>
                    <label>{filterLanguage == "all" ? "Todos" : filterLanguage}</label>
                    <IoIosArrowDown onClick={() => { setOpenSelectLanguage(!openSelectLanguage) }} size={20} color={"#F1F1F1"} />
                    <div>
                        <label onClick={() => { setFilterLanguage("all"); setOpenSelectLanguage(false) }}>Todos</label>
                        <label onClick={() => { setFilterLanguage("Java"); setOpenSelectLanguage(false) }}>Java</label>
                        <label onClick={() => { setFilterLanguage("PHP"); setOpenSelectLanguage(false) }}>PHP</label>
                        <label onClick={() => { setFilterLanguage("JavaScript"); setOpenSelectLanguage(false) }}>JavaScript</label>
                    </div>
                </SelectCustom>
                <SelectCustom open={openSelectOrder}>
                    <label>{formatTextOrder()}</label>
                    <IoIosArrowDown onClick={() => { setOpenSelectOrder(!openSelectOrder) }} size={20} color={"#F1F1F1"} />
                    <div>
                        <label onClick={() => { setOrder({ name: "full_name", type: "asc" }); setOpenSelectOrder(false) }}>Nome A - Z</label>
                        <label onClick={() => { setOrder({ name: "full_name", type: "desc" }); setOpenSelectOrder(false) }}>Nome Z - A</label>
                        <label onClick={() => { setOrder({ name: "updated_at", type: "asc" }) }}>Atualização mais antiga</label>
                        <label onClick={() => { setOrder({ name: "updated_at", type: "desc" }) }}>Atualização mais recente</label>
                        <label onClick={() => { setOrder({ name: "created_at", type: "asc" }) }}>Antigos</label>
                        <label onClick={() => { setOrder({ name: "created_at", type: "desc" }) }}>Novos</label>
                    </div>
                </SelectCustom>
            </BoxLeft>
            <BoxRigth>
                <Search>
                    <input placeholder='Pesquisar repositório' type={"text"} value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span onClick={() => { getSearch() }}>
                        <VscSearch />
                    </span>
                </Search>
            </BoxRigth>

        </Container>
    )
}

export default BarFilters