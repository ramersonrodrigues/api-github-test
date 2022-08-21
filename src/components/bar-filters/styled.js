import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    height: 75px ;
    width: 100% ;
    align-items: center ;

    @media(max-width: 1200px) {
        flex-direction: column;
        gap: 20px;
        height: auto ;
    }
`

export const BoxLeft = styled.div`
    //background-color: yellow;
    display: flex ;
    height: 100% ;
    align-items: center ;
    justify-content: left ;
    //padding-left: 20px;
    gap: 20px;
    margin-right: 20px ;

    @media(max-width: 1200px) {
        width: 100% ;
        //background-color: red ;
        justify-content: space-between ;
        margin-right: 0px ;
    }

    @media(max-width: 1000px) {
        flex-direction: column ;
    }

    @media(max-width: 900px) {
        flex-direction: row;
    }

    @media(max-width: 600px) {
        flex-direction: column;
    }
`

export const BoxRigth = styled.div`
    //background-color: purple;
    display: flex ;
    height: 100% ;
    flex: 1 ;
    align-items: center ;
    justify-content: right ;
    //padding-right: 20px;

    @media(max-width: 1200px) {
        width: 100% ;
        //background-color: red ;
        justify-content: space-between ;
    }


`

export const Option = styled.div`
    //background-color: ${props => props.active ? "red" : "gray"};
    background-color: ${props => props.active ? props.theme.listRepos.filter.backgroundColor : "transparent"};
    display: flex ;
    height: 35px ;
    align-items: center ;
    justify-content: right ;
    padding: 10px 20px;
    border-radius: 20px ;
    cursor: pointer;
    color: ${props => props.theme.listRepos.filter.fontColor};
    border: ${props => props.active ? `1px solid ${props.theme.listRepos.filter.borderColor}` : "none"} ;

    label{
        cursor: pointer;
        font-size: 12px ;
    }
`

export const SelectCustom = styled.div`
    background-color: ${props => props.theme.listRepos.filter.backgroundColor};
    display: flex ;
    position: relative;
    width: 150px ;
    height: 35px ;
    border-radius: 5px ;
    justify-content: space-between ;
    align-items: center ;
    padding: 0px 10px ;

    label{
        font-size: 12px ;
        color: ${props => props.theme.listRepos.filter.fontColor};
    }

    div{
        position: absolute ;
        display: ${props => props.open ? "flex" : "none"} ;
        flex-direction: column ;
        top: 0;
        left: 0 ;
        margin-top: 40px;
        //background-color: red ;
        gap: 5px;
        

        label{
            background-color: ${props => props.theme.listRepos.filter.backgroundColor};
            width: 150px ;
            height: 35px ;
            display: flex ;
            border-radius: 5px ;
            align-items: center ;
            padding: 0px 10px ;
            cursor: pointer;
            font-size: 12px ;
            color: ${props => props.theme.listRepos.filter.fontColor};
        }
    }

    svg{
        cursor: pointer;
    }

`



export const Search = styled.div`
    background-color: ${props => props.theme.listRepos.filter.search.backgroundColor};
    display: flex;
    width: 100% ;
    align-items: center ;
    border-radius: 5px ;

    svg{
        width: 20px ;
        height: 20px ;
        cursor: pointer;
    }

    span{
        display: flex ;
        background-color: ${props => props.theme.listRepos.filter.search.icon.backgroundColor};
        width: 40px ;
        height: 40px ;
        align-items: center ;
        justify-content: center ;
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;

        svg{
            color: ${props => props.theme.listRepos.filter.search.icon.color};
        }
    }

    input{
        display: flex ;
        flex: 1;
        height: 40px ;
        outline: none ;
        border: none ;
        padding: 0px 10px ;
        border-radius: 5px ;
        background-color: transparent ;
    }
`