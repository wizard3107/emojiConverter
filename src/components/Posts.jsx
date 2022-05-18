import React from 'react'
import styles from './css/input.module.css'
const Posts = () => {
    const [posts,setPosts]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://emojiconverter.herokuapp.com/post")
        .then(res=>res.json())
        .then(res=>setPosts(res))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className={styles.post}>
      {
          posts.map(ele=>{
              return <div >{ele.post}</div>
          })
      }
    </div>
  )
}

export default Posts
