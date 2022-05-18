import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  styles from './css/input.module.css'
import Input from './Input'
import Posts from './Posts'
const Router = () => {
  return (
          <div className={styles.mainContainer}>
      <Routes>
          <Route path='/' element={<Input/>}/>
          <Route path='/post' element={<Posts/>} />
      </Routes>
          </div>
  )
}

export default Router
