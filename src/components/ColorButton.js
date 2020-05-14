import React from 'react'
import styled from 'styled-components'

const ColorButton = ({onClick, selected, color}) => {

    return(
        <StyledButton onClick={onClick} selected={selected} color={color}/>
    )
}

const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    border-width: ${props => props.selected ? '2px' : '0'};
    border-color: ${props => props.color === 'black' ? 'green' : 'black'};
    border-style: solid;
    margin: 0 10px 0 10px;
    outline: none
`

export default ColorButton