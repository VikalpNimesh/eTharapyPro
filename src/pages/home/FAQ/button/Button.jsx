import React from 'react'



const Button = () => {

    const buttonStyle = {
        background: 'var(--white)',
        color: 'var(--dark-blue)',
        width: '100%',
        height: '40px',
        padding: '9px 24px 11px 24px',
      borderRadius: '50px',
        border : '1px solid #62CF6E',
        fontSize: '16px',
        fontWeight: '700',
      lineHeight: '19.2px',
        marginTop:'40px'
      };
  return (
    <button style={buttonStyle} className="start-therapy-btn">See All</button>

  )
}

export default Button
