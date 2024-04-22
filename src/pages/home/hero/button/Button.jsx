import React from 'react'



const Button = () => {

    const buttonStyle = {
        background: 'var(--dark-blue)',
        color: 'var(--white)',
        width: '203px',
        height: '60px',
        padding: '20px 32px',
        borderRadius: '50px',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21.6px'
      };
  return (
    <button style={buttonStyle} className="start-therapy-btn">Start therapy</button>

  )
}

export default Button
