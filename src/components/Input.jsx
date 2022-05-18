import React from 'react'

const Input = () => {
    const [text,setText] = React.useState("")
    const [emoji ,setEmoji] =React.useState([])
    React.useEffect(() => {
        fetch("https://emojiconverter.herokuapp.com/emoji")
            .then(res => res.json())
            .then(res => {console.log(res)
                setEmoji(res)})
            .catch(err => console.log(err))
    }, [])
    const setValue=(e,ip)=>{
        setText();
    }
    const handleChange =(e)=>{
        setText(e.currentTarget.value)
        console.log(text)
        console.log("emoji: ",emoji)
        let ip  = text.split(" ")
        for (let i = 0; i < ip.length; i++) {
            for (let j = 0; j < emoji.length; j++) {
                if (ip[i] === emoji[j].name) {
                    ip[i] = emoji[j].emoji;
                    setText(ip.join(" "))
                }
            }
        }
        console.log(ip)

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let obj = {
            "post":  text 
        }
        fetch("https://emojiconverter.herokuapp.com/post",{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"Content-Type":"application/json"}  
        })
            .then(res => res.json())
            .then(res => {console.log(res)
                fetch("https://emojiconverter.herokuapp.com/post")
                    .then(res => res.json())
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
})
            .catch(err => console.log(err))
    }
    return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={text} placeholder="Add Text" onChange={e=>handleChange(e)}/>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Input
