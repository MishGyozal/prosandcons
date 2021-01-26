import React, { useState } from 'react';
const axios = require('axios');


const ProsContainer = (props) => {
let inputValue = ""
const changeValueInput = (e) => {
    inputValue = e.target.value
}

    return (

        <div className = "ProsContainer" >
          <div>
              <div className="nameTabe">Pro's</div>  
            {
                props.pros.map(( item, i ) => {
                    return (
                        <div key={i} className="itemName" > <p>{item}</p> <button className="minusIcon" onClick={()=> props.changeData(i, "prosItem")}></button></div>
                    )
                })
            }
          </div>
          <div>
              <div className="itemName">
                  <input  placeholder="New Pro's" onChange= {(e)=> changeValueInput(e)}/>
                  <button className="plusIcon"
                    onClick = {() => {props.changeData(false, "prosItem", inputValue)}}
                  >
                      
                  </button>
              </div>
          </div>
        </div>
    )
};

export default ProsContainer;