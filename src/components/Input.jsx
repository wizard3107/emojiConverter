import React from 'react'
import styles from'./css/input.module.css'
const Input = () => {
    const [text,setText] = React.useState("")
    const [convertedText, setConvertedText] = React.useState("")
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
    const checkingSubmit = (ip) => {
        for (let i = 0; i < ip.length; i++) {
            for (let j = 0; j < emoji.length; j++) {
                if (ip[i] === emoji[j].name) {
                    ip[i] = emoji[j].emoji;
                    //setConvertedText(ip.join(" "))
                }
            }
        }
        return ip.join(" ");
    }
    const checking=(ip)=>{
        for (let i = 0; i < ip.length; i++) {
            for (let j = 0; j < emoji.length; j++) {
                if (ip[i] === emoji[j].name) {
                    ip[i] = emoji[j].emoji;
                    setConvertedText(ip.join(" "))
                }
            }
        }
    }
    const handleChange =(e)=>{
        setText(e.currentTarget.value)
        setConvertedText(e.currentTarget.value)
        console.log(text)
        console.log("emoji: ",emoji)
        let ip  = text.split(" ")
        checking(ip)
        console.log(ip)

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(convertedText==="")
        {
            return alert("Can not submit empty text!!")
        }
        let dat = checkingSubmit(text.split(" "));
        let obj = {
            "post":  dat
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

        setConvertedText("")
        setText("")
    }
    return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" className={styles.input} value={text} placeholder="Add Text" onChange={e=>handleChange(e)}/>
            <input type="submit" value="Submit"  className={styles.submit}/>
        </form>
            <textarea placeholder='Converted Text' value={convertedText} className={styles.textarea}></textarea>
    </div>
  )
}

export default Input
