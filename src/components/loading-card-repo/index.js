import React from 'react'
import { Container, Left, Rigth } from './styled'

const LoadingCardRepo = () => {
    return (
        <Container>
            <Left>
                <div />
            </Left>
            <Rigth>
                {Array(3).fill(<div />)}
            </Rigth>
        </Container>
    )
}

export default LoadingCardRepo