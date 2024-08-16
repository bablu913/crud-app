import React, { useMemo, useState } from 'react'

const MemoizedSearch = () => {
    const fruits = ['apple', 'banana', 'orange', 'pineapple', 'mango', 'watermelon', 'grapes', 'papaya', 'pomegranate', 'kiwi', 'guava'];
    const [text,setText]=useState('');
    const [query,setQuery]=useState('');
     const onTextChange =(e)=>{
        setText(e.target.value);
        setQuery(text);
     }
     const matchedValues = useMemo(()=>{
        return fruits.filter(x=>x.includes(query))
     },[query])
  return (
    <div>
        <input type="text" value={text} onChange={onTextChange} />
        <h2>{matchedValues.join(',')}</h2>
    </div>
  )
}

export default MemoizedSearch