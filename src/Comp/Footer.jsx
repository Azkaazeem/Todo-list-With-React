import React from 'react'

const Footer = () => {
    return (
        <div className="custom-footer">
            <p>
                © 2026 TODO App. Developed with{' '}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="#ff4d4f" 
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: 'middle', margin: '0 2px', paddingBottom: '2px' }}
                >
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </p>
        </div>
    )
}

export default Footer