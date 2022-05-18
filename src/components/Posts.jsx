import React from 'react'

const Posts = () => {
    const [posts,setPosts]=React.useState([]);
    React.useEffect(()=>{
        fetch("https://emojiconverter.herokuapp.com/post")
        .then(res=>res.json())
        .then(res=>setPosts(res))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      {
          posts.map(ele=>{
              return <div>{ele.post}</div>
          })
      }
    </div>
  )
}

export default Posts
