import { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';

const CheckTag = styled.label`    

    --checkbox-dimension: 20px;
    display: block;
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;  

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }  
  
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: var(--checkbox-dimension);
        width: var(--checkbox-dimension);
        background-color: #eee;
    }  
  
    &:hover input ~ .checkmark {
        background-color: #ccc;
    }  
  
    input:checked ~ .checkmark {
        background-color: var(--primary-color);
    }  
  
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }  
  
    input:checked ~ .checkmark:after {
        display: block;
    }  
  
    .checkmark:after {
        left: 6px;
        top: 1px;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

interface CheckProps {
    value: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
}
export const InputCheckBox : FC<CheckProps> = (props) => {
    return (
        <>
            <CheckTag className="container">
                <input type="checkbox" checked={props.value} onChange={props.onChange}/>
                <span className="checkmark"></span>
            </CheckTag>
        </>
    )
}