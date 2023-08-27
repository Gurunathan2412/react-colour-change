import "./Color.css"
import {useState} from "react"
function Color({colors}){
    // console.log(colors)
    function randomColorValue(){
        return colors[Math.floor(Math.random()*colors.length)]
    }
    const bgr = randomColorValue()
    const [bg, setBg] = useState(bgr)

    function randomColor(){
        setBg(randomColorValue())
    }
    return (
        <div onClick= {randomColor} style={ {backgroundColor: bg}
        } className="square"></div>
    )
}

export default Color;