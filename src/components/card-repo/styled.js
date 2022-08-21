import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.listRepos.cardRepo.backgroundColor};
    height: 75px ;
    border-radius: 5px ;
    display: flex ;
    padding: 0px 20px ;

    @media(max-width: 600px) {
        flex-direction: column;
        height: auto ;
        min-height: 75px ;
        padding: 20px 20px ;
        gap: 20px
    }
`

export const BoxRigth = styled.div`
    height: 100% ;
    display: flex ;
    gap: 20px;
    align-items: center ;

    
    @media(max-width: 400px) {
        //background-color: red ;
        flex-direction: column ;
    }
`

export const BoxLeft = styled.div`
    //background-color: violet ;
    height: 100% ;
    display: flex ;
    flex: 1;
    align-items: center ;

`

export const Item = styled.div`
    background-color: ${props => props.theme.listRepos.cardRepo.item.backgroundColor};
    //height: 40px;
    border-radius: 5px;
    //padding: 0px 20px ;
    height: 30px;
    min-width: 75px ;
    display: flex ;
    align-items: center ;
    border: ${props => `1px solid ${props.theme.listRepos.cardRepo.item.borderColor}`} ;
    

    span{
        display: flex ;
        background-color: ${props => props.theme.listRepos.cardRepo.item.icon.backgroundColor} ;
        height: 100% ;
        width: 30px ;
        align-items: center;
        justify-content: center ;
        border-radius: 5px 0px 0px 5px ;
        position: relative ;

        :hover{

            div{
                display: flex ;
            }
        }

        svg{
            color: ${props => props.theme.listRepos.cardRepo.item.icon.color};
        }

        div{
            display: none ;
            position: absolute ;
            //width: 75px ;
            top: 0;
            right: 0;
            background-color: ${props => props.theme.listRepos.cardRepo.tooltips.backgroundColor} ;
            margin-top: -35px;
            margin-right: 0px;
            padding: 2.5px 20px ;
            border-radius: 5px;
            color: ${props => props.theme.listRepos.cardRepo.tooltips.fontColor};

            :after{
                content: '';
                position: absolute;
                top: 100%;
                right: 7px;
                border-top: 8px solid ${props => props.theme.listRepos.cardRepo.tooltips.backgroundColor};
                border-right: 8px solid transparent;
                border-left: 8px solid transparent;
            }

            label{
                font-size: 12px ;
            }
        }
    }

    label{
        display: flex ;
        //background-color: purple ;
        flex: 1 ;
        justify-content: center ;
        font-size: 11px ;
    }

    
`