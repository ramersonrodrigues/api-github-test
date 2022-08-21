import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.cardProfile.backgroundColor} ;
    display: flex ;
    flex-direction: column ;
    border-radius: 10px ;
    width: 300px ;
    padding: 20px ;
`

export const Avatar = styled.div`
    //background-color: red ;
    display: flex ;
    justify-content: center ;
    margin: 20px 0px ;

    img{
        width: 150px ;
        height: 150px ;
        border-radius: 75px ;
        border: ${props => `2px solid ${props.theme.cardProfile.avatar.borderColor}`};
    }
`

export const Name = styled.label`
    //background-color: red ;
    display: flex ;
    justify-content: center ;
    color: ${props => props.theme.cardProfile.fontColor};
    //font-weight: 400 ;
`

export const Bio = styled.label`
    //background-color: red ;   
    display: flex ;
    justify-content: center ;
    font-size: 12px ;
    margin: 10px 20px;
    text-align: center ;
    color: ${props => props.theme.cardProfile.fontColor};
`

export const Infor = styled.div`
    //background-color: red ;
    display: flex ;
    flex-direction: column ;
    gap: 10px;
`

export const Line = styled.div`
    background-color: ${props => props.theme.cardProfile.line.backgroundColor} ;
    display: flex ;
    justify-content: space-between ;
    border-radius: 5px ;
    padding: 0px 10px ;
    font-size: 12px ;
    padding: 5px 20px;
    color: ${props => props.theme.cardProfile.line.fontColor};
`

export const ButtonCustom = styled.div`
    //background-color: gray ;
    display: flex ;
    margin: 10px 35px;
    height: 40px ;
    border-radius: 20px ;
    align-items: center ;
    justify-content: space-between ;
    padding: 0px 20px ;
    font-size: 14px;
    cursor: pointer;
    border: ${props => `2px solid ${props.theme.cardProfile.button.fontColor}`};
    color: ${props => props.theme.cardProfile.button.fontColor};

    label{
        display: flex;
        //background-color: yellow ;
        flex: 1 ;
        justify-content: center ;
        cursor: pointer;
    }
`