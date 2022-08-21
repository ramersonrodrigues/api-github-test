import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.alert.backgroundColor} ;
    flex:1 ;
    display: ${props => props.visible ? "flex" : "none"} ;
    height: 75px ;
    margin: 20px 20px 0px 20px ;
    border-radius: 5px ;

`
export const BoxLeft = styled.div`
    width: 75px ;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    //background-color: red ;
    

    svg{
        color: ${props => props.theme.alert.icon.alert.backgroundColor}
    }
`

export const BoxRigth = styled.div`
    display: flex ;
    flex: 1 ;
    align-items: center ;
    justify-content: left ;
    //background-color: red ;
    position: relative ;
    padding: 0px 20px ;

    svg{
        position: absolute ;
        right: 0;
        margin-right: 5px;
        cursor: pointer;
        color: ${props => props.theme.alert.icon.close.backgroundColor}
    }
`