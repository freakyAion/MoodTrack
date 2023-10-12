import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from '../context/navState';

const MenuButton = styled.button`
  display: block;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 1;
  padding: 12px;
  background: ;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 24px;
    }

    span:nth-of-type(2) {
      width: 24px;
    }

    span:nth-of-type(3) {
      width: 24px;
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 24px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(4px, -4px);
      width: 24px;
    }
  }
`;
const Bar = styled.span`
    display: block;
    width: 24px;
    height: 3px;
    margin-bottom: 7px;
    background-color: #FFFFFF;
    border-radius: 16px;
`;

const HumburgerButton = () => {
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <MenuButton className={isMenuOpen ? 'active' : ''}
        aria-label="Открыть главное меню"
        onClick={clickHandler}
        >
            <Bar />
            <Bar />
            <Bar />
        </MenuButton>
    );
};

export default HumburgerButton;