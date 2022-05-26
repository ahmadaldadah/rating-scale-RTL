import React ,{ useState } from "react";
import useInputState from "./hooks/useInputState";
import increaseBrightness from "./increaseBrightness";
import "./rating.css" ;


const Rating = ({colorBackground = "#e4e5e9",colorRating = "#ffc107", rtl=false ,  width = "75px" , height="20px"}) =>{
    const [rating , setRating] = useState(null);
    const [hover , setHover] = useState(null);
    const [input , updateInput] = useInputState(null);
    const [input2 , updateInput2] = useInputState(null);
   
    let hoverColor = increaseBrightness(input||colorRating , 60);

    let ratingStyle = {
        backgroundColor :  input || colorRating,
        width : `${width}px`,
        height : `${height}px`
    };

    let hoverStyle = {
        backgroundColor :  hoverColor,
        width : `${width}px`,
        height : `${height}px`
    };

    let backgroundStyle = {
        backgroundColor : input2 ||  colorBackground ,
        width : `${width}px`,
        height : `${height}px`
    };

    return (
    <div style={{marginBottom:"15px"} } >
        <div className="takeValue">
            <label>
                Choose rating color
                <input type="color" value={input || colorRating}  className="inputClass" onChange={updateInput} />
            </label>
            
      
            <label>
                Choose background color
                <input type="color" value={input2 || colorBackground}  className="inputClass" onChange={updateInput2} />

            </label>
        </div>
        
        <div className={rtl === true ? "rating_scaleRtl" : "rating_scale"}>
            {[...Array(10)].map((rate,i) => {
                const ratingValue = i + 1;
                return(
                <div className={rtl === true ? "scaleRtl" : "scale"} key={i} 
                onClick={()=>setRating(ratingValue)}
                style={ratingValue <=  rating  ? ratingStyle:
                    ratingValue <= hover ? hoverStyle :backgroundStyle}  
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
                >
                </div>
                )})}
        </div>
       
    </div>)
       
}

export default Rating;