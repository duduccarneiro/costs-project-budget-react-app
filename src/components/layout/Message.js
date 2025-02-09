import { useState, useEffect } from 'react'

import styles from './Message.module.css'

function Message({type, msg, setMessage}) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(!msg){
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
      if (setMessage) setMessage('');
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg, setMessage])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

export default Message
