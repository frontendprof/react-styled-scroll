
import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrapper,
    SidebarRoute
} from "./SidebarElements";



const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>

                    <SidebarLink to="/discover" onClick={toggle}>Discover</SidebarLink>

                    <SidebarLink to="/services" onClick={toggle}>Services</SidebarLink>

                    <SidebarLink to="/signup" onClick={toggle}>Signup</SidebarLink>

                </SidebarMenu>

                <SideBtnWrapper>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
