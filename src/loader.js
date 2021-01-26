import React from 'react'

const Loader = () => {

    return (
        <div style= {{display:'flex', justifyContent:'center', margin:'0.5rem'}}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Loader;