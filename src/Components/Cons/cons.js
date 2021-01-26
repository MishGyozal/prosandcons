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
          <div className="nameTabe">Con's</div>  

            {
                props.cons.map(( item, i ) => {
                    return (
                        <div className="itemName" key={i}><p>{item}</p> <button className="minusIcon" onClick={()=> props.changeData(i, "consItem")}></button></div>
                    )
                })
            }
          </div>
          <div>
              <div className="itemName">
                  <input  placeholder="New Con's"  onChange= {(e)=> changeValueInput(e)}/>
                  <button className="plusIcon"
                    onClick = {() => {props.changeData(false, "consItem", inputValue)}}
                  >
                      
                  </button>
              </div>
          </div>
        </div>
    )
};

export default ProsContainer;