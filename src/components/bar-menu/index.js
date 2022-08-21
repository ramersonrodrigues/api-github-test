import React, { useEffect, useState } from 'react'
import { BoxLeft, BoxRigth, Container, Search, SwitchCustom } from './styled'
import { AiFillGithub } from "react-icons/ai";
import { VscSearch } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { getUserGithub } from 'redux/slices/sliceUserGithub';
import { setTheme } from 'redux/slices/sliceTheme';

const BarMenu = () => {

    const dispatch = useDispatch()
    const [userSearch, setUserSearch] = useState("ramersonrodrigues")
    const [swithDark, setSwithDark] = useState(true)

    useEffect(() => {
        dispatch(setTheme(swithDark ? "dark" : "light"))
    }, [swithDark])


    const getUser = () => {
        dispatch(getUserGithub(userSearch.trim()))
    }

    return (
        <Container>
            <BoxLeft>
                <AiFillGithub size={50} />
                <label>Github</label>
                <SwitchCustom onClick={() => { setSwithDark(!swithDark) }} swith={swithDark}>
                    {swithDark && <label>Dark</label>}
                    <span />
                    {!swithDark && <label>Light</label>}
                </SwitchCustom>
            </BoxLeft>
            <BoxRigth>
                <Search>
                    <input placeholder='Pesquisar perfil' type={"text"} value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
                    <span onClick={() => { getUser() }}>
                        <VscSearch />
                    </span>
                </Search>
            </BoxRigth>
        </Container>
    )
}

export default BarMenu