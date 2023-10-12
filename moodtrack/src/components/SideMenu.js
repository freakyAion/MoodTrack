import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import { MenuContext } from '../context/navState';
//import arrow from '../img/arrow.svg';
import '../styles/testForSideMenu.css'

const Menu = styled.nav`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 293;
    display: block;
    width: 400px;
    max-width: 100%;
    margin-top: 0px;
    padding-top: 80px;
    padding-right: 0px;
    align-item: stretch;
    background-color: #FFFFFF;
    transform: translateX(-100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${props =>
        props.open &&
        css`
        transform: translateX(0);
        `}
`;

export const MenuLink = styled.a`
    position: relative;
    display: block;
    text-align: left;
    max-width: 100%;
    padding-top: 25px;
    padding-left: 16%;
    background-position: 88% 50%;
    background-size: 36px;
    transition: background-position 300ms cubi-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: none;
    /*background-color: #8BC0CF;*/
    color: #FFFFFF;
    font-size: 32px;
    line-height: 120%;
    fint-weight: 500;
    margin-botom: 22px;
    weight: 328px;
    hieght: 79px;

    :hover {
        background-position: 90% 50%;
    }
`;

export const SideMenu = ({children}) => {
    const {isMenuOpen} = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
        {/*Поменять ссылки на выплывающем  окне*/}
        <div className='buttonsInOption'>
            <div className='button'>
                <MenuLink href="/">Темы</MenuLink>
            </div>
            <div className='button'>
                <MenuLink href="/articles">Напоминания</MenuLink>
            </div>
        </div>
        </>
    ),
};