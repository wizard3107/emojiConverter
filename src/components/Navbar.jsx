import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/input.module.css'
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.link} to='/'>Home</Link>
      <Link className={styles.link} to="/post">Posts</Link>
    </div>
  )
}

export default Navbar
