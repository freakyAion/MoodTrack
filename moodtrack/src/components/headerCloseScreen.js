import React from 'react';
import '../styles/stileHeaderCloseScreen';

function HeaderCloseScreen() {
    return (
        <div className='headerWithCloseButton'>
            <a className='buttonClose'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M18.9707 2L2.00014 18.9706" stroke="#A2A2A2" stroke-width="4" stroke-linecap="round"/>
                <path d="M18.9707 18.9707L2.00014 2.00014" stroke="#A2A2A2" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </a>
        </div>
    )
}

export default HeaderCloseScreen;