import React from 'react'
import styled from 'styled-components'

const Button = ({text, onClick, selected}) => {

    return(
        <StyledButton onClick={onClick} selected={selected}>
            <span>{text}</span>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${props => props.selected ? 'black' : 'gray'};
    color: ${props => props.selected ? 'white' : 'black'};
    margin: 0 10px 0 10px;
    outline: none
`

export default Button