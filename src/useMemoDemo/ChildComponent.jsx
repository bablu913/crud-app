import React, { useEffect } from 'react'

const ChildComponent = () => {
    useEffect(() => {
        console.log('ChildComponent')
    })
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent