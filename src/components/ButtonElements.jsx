
import styled from "styled-components";
import { Link } from 'react-scroll';


export const Button = styled(Link)`
    border-radius:50px;
    background:${({ primary }) => (primary ? "#d90368" : "#baff29")};
    white-space:nowrap;
    padding:${({ big }) => big ? "14px 48px" : "12px 30px"};
    color:${({ dark }) => dark ? "yellow" : "#d90368"};
    font-size:${({ fontBig }) => fontBig ? "20px" : "16px"};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all .2s ease-in-out;

    &:hover{
        background:${({ primary }) => (primary ? "#baff29" : "#0d0b11")};
        color:${({ dark }) => dark ? "#d90368" : "#0d0b11"};
    }
`