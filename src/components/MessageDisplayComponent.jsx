import React, { useState } from 'react'

function MessageDisplayComponent() {
  const [message, setMessage] = useState('kjnkjhk')
  return (
    <div className='display-box'> 
      {message}
    </div>
  )
}

export default MessageDisplayComponent
