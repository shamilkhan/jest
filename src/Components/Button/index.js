import React from 'react';
import styled from 'styled-components/macro';

const Button = styled.button`
    padding: 5px 10px;
    border: 1px solid #000;
    outline: 0;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
`

function ButtonComponent({children, text}) {
    return (
        <Button>
            {children ? children : text ? text: ""}
        </Button>   
    )
}

export default ButtonComponent;