import Color from "./Color";
import "./ColorDisp.css"

const color = [
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#00FFFF",
    "#FF00FF",
    "#90EE90",
    "#ADD8E6",
    "#FFFFE0",
    "#FFD700",
    "#E6E6FA",
    "#FFB6C1",
    "#D3D3D3"
]

function ColorDisp(){
    const grid  = []
    for (let i = 0; i < 25; i++) {
        grid.push(<Color colors={color} key={i} />)

    }
    return (
        <div className="grid">
           {grid}
            
        </div>
    )
}
export default ColorDisp;