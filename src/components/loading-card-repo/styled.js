import styled from "styled-components";

export const Container = styled.div`
    background-color: #c1c1c1 ;
    display: flex ;
    height: 75px ;
    border-radius: 5px;
    padding: 0px 20px;


    animation: Skeleton 1s ease infinite alternate;

    @keyframes Skeleton{
        to{
            opacity: 0.5;
        }
    }
`

export const Left = styled.div`
    //background-color: red ;
    display: flex ;
    flex: 1 ;
    align-items: center ;

    div{
        width: 150px;
        background-color: gray;
        height: 30px;
        border-radius: 5px ;
    }
`

export const Rigth = styled.div`
    //background-color: yellow ;
    display: flex ;
    gap: 20px;
    align-items: center ;
    
    div{
        width: 75px;
        background-color: gray;
        height: 30px;
        border-radius: 5px ;
    }
`