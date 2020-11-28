
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";




export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#0d0d0d;
    display:flex;
    align-items:center;
    
    left:0;
    transition:.3s ease-in-out;
    opacity:${({ isOpen }) => (isOpen ? "100%" : "0")};
    top:${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:red;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;

export const SidebarWrapper = styled.div`
    color:#fff;
`;

export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;

    @media screen and (max-width:480px){
        grid-template-rows:repeat(6,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition:.2s ease-in-out;
    color:pink;
    cursor:pointer;

    &:hover{
        color:#01b071;
    }
`;

export const SideBtnWrapper = styled.div`
    display:flex;
    justify-content:center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    transition:all .2s ease-in-out;

    &:hover{
        background:#fff;
        color:#010606;
    }
`



