import React from 'react';
import '../styles/button.css';

export default function Button({link, text, onClick, classValue}) {
    return (
        <button onClick={onClick} className={classValue}>
            { link ? 
                <a href={link}>
                    {text}
                </a>
                : text
            }
        </button>
    )
}