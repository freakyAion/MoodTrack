import React from 'react';
import './styleStartScreen.css';

function StartScreen() {
    return(
        <div>
            <header>
                <div className='buttonOption'>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                        <rect width="43" height="43" rx="10" fill="#8BC0CF"/>
                        <path d="M10 12H34" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        <path d="M10 22H34" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        <path d="M10 32H34" stroke="white" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                    </a>
                </div>
            </header>
        
            <main>
                <p>Основа</p>
            </main>

            <footer>
                <p>Подвал</p>
            </footer>
        </div>
    )
}

export default StartScreen;
