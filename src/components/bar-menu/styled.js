import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.barMenu.backgroundColor} ;
    display: flex ;
    height: 75px ;
    width: 100% ;
    //margin-bottom: 20px ;

    @media(max-width: 600px) {
        flex-direction: column;
        height: auto ;
        gap: 20px;
        padding: 20px 0px ;
    }
`

export const BoxRigth = styled.div`
    //background-color: yellow;
    display: flex ;
    height: 100% ;
    flex: 1 ;
    align-items: center ;
    justify-content: right ;
    margin-right: 20px;
`

export const BoxLeft = styled.div`
    //background-color: purple;
    display: flex ;
    height: 100% ;
    //width: 300px ;
    align-items: center ;
    justify-content: left ;
    margin-left: 20px;

    label{
        font-size: 22px ;
        margin-left: 20px ;
        color: ${props => props.theme.barMenu.fontColor};
    }

    svg{
        color: ${props => props.theme.barMenu.logoColor};
    }
`
export const Search = styled.div`
    background-color: ${props => props.theme.barMenu.search.backgroundColor}; 
    display: flex;
    width: 350px ;
    align-items: center ;
    border-radius: 5px ;

    @media(max-width: 600px) {
        width: 100% ;
        margin-left: 20px ;
    }

    svg{
        width: 20px ;
        height: 20px ;
        cursor: pointer;
    }

    span{
        display: flex ;
        background-color: ${props => props.theme.barMenu.search.icon.backgroundColor}; 
        width: 40px ;
        height: 40px ;
        align-items: center ;
        justify-content: center ;
        border-radius: 0px 5px 5px 0px;
        cursor: pointer;

        svg{
            color: ${props => props.theme.barMenu.search.icon.color};
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

export const SwitchCustom = styled.div`
    background-color: ${props => props.theme.barMenu.swith.backgroundColor} ;
    height: 25px ;
    width: 75px ;
    display: flex ;
    border-radius: 12.5px;
    margin-left: 20px ;
    align-items: center ;
    justify-content: space-between ;
    padding: 0px 5px 0px 5px ;
    cursor: pointer;

    label{
        display: flex ;
        font-size: 12px;
        //background-color: yellow ;
        margin: 0px ;
        flex: 1 ;
        margin-left: 5px ;
        cursor: pointer;
        color: ${props => props.theme.barMenu.swith.fontColor}
    }


    span{
        width: 20px ;
        height: 20px ;
        background-color: ${props => props.theme.barMenu.swith.circle} ;
        border-radius: 50% ;
        cursor: pointer;
    }
`