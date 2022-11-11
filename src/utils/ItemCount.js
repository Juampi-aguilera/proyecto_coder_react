import { useState } from "react";

const ItemCount = ({ stock, initial }) =>{
    
    const [value,setValue] = useState(initial);

    const sumar=()=>{
        if(value<stock){
            setValue(value+1)
        }
    }
    const restar=()=>{
        if(value>1){
            setValue(value-1)
        }
    }


    return(
        <div id="item_counter">
            <svg onClick={restar} id="restador" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>

            <p id="counter">{value}</p>

            <svg onClick={sumar} id="sumador" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
        </div>
    )
}

export default ItemCount;