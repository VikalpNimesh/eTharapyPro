import React from 'react'



const Button = () => {

    const buttonStyle = {
        background: 'var(--dark-blue)',
        color: 'var(--white)',
        width: '154px',
        height: '40px',
        padding: '9px 24px 11px 24px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '19.2px'
      };
  return (
    <button style={buttonStyle} className="start-therapy-btn">Start therapy</button>

  )
}

export default Button
