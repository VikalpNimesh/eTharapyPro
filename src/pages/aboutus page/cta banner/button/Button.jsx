import React from 'react'



const Button = () => {

    const buttonStyle = {
        background: '#023856',
        color: 'var(--white)',
      width: 'auto',
        // margin:"auto",
        height: '60px',
        padding: '20px 32px 20px 32px',
        borderRadius: '50px',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '19.2px',
        // wordSpacing:"8px"
      };
      
  return (
    <button style={buttonStyle} className="start-therapy-btn">Start Your Journey</button>

  )
}

export default Button
