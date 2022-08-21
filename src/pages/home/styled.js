import styled from "styled-components";

export const Container = styled.div`

    display: flex ;
    width: 100% ;
    align-items: center ;
    padding: 0px 20px 20px 20px ;
    align-items: flex-start ;
    margin-top: 20px ;

    @media(max-width: 900px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const BoxLeft = styled.div`
    display: flex ;
    width: 300px ;

    @media(max-width: 900px) {
        //background-color: red ;
        width: 100% ;
        justify-content: center;
    }

`

export const BoxRigth = styled.div`
    display: flex ;
    flex: 1;
    background-color: ${props => props.theme.listRepos.backgroundColor};
    margin-left: 20px ;
    border-radius: 10px ;
    //height: 350px ;
    flex-direction: column ;
    gap: 20px;
    padding: 20px ;
    width: 100% ;

    @media(max-width: 900px) {
        margin-left: 0px ;
    }

`
export const Paginate = styled.div`
    //background-color: yellow;
    display: flex ;
    justify-content: right ;
    //height: 40px ;
    align-items: center ;

    color: ${props => props.theme.listRepos.paginate.fontColor};

    svg{
        cursor: pointer;
        color: ${props => props.theme.listRepos.paginate.iconColor};
    }
`