import React from 'react'
import './Sidebar.css'
import { useNavigation } from 'react-router-dom'


function Sidebar() {
  const navigator = useNavigation()
  return (
    <div className="gap-2 sidebar" style={{width:'20%', margin:20}}>
        <a href='/'>Home</a>
        <a href='/edit'>Edit</a>
        <a>Contact</a>
        <a>About</a>
    </div>
  )
}

export default Sidebar