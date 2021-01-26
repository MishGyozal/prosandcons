import React, { useEffect, useState } from 'react';
import Loader from '../../loader';
import ConsContainer from '../Cons/cons';
import ProsContainer from '../Pros/pros';
const axios = require('axios');


const Table = (props) => {

    const groupId = props.group;
    const userId = props.user;
    const [pros, setPro] = useState('');
    const [cons, setCon] = useState('');
    const [loading, setLoading] = useState(true);

    
        useEffect(() => {

            if(groupId){
                axios.get(`https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`)
                .then(function (response) {
                    setCon(response.data.cons);
                    setPro(response.data.pros);
                    setLoading(false)
                })
                .catch(function (error) {
                console.log(error);
                });
            }
        },[userId,groupId] )

    

    const changeData = (index, itemType, data = false) => {
        let oldData = []
        let newData = {}
        if(itemType === "prosItem"){
            oldData = pros ? [...pros] : []
            if(data){
                oldData.push(data)
            }else{
                oldData.splice(index, 1)
            }
            newData.pros = oldData
            newData.cons = [...cons]
        }else{
            oldData = [...cons]
            if(data){
                oldData.push(data)
            }else{
                oldData.splice(index, 1)
            }
            newData.cons = oldData
            newData.pros = [...pros]
            console.log(newData)
        }
        

        axios.put(`https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`, newData)
        .then(function (response) {
            setCon(newData.cons);
            setPro(newData.pros);
        })
        .catch(function (error) {
        console.log(error);
        });
    }



    return (

        <div className="Table">
             
             {loading ? 
             <Loader/> : 
             <div className='tableDiv'>
                {
                    pros ? 
                    <ProsContainer
                        changeData = {changeData}
                        pros={pros}
                    />
                    : <ProsContainer changeData = {changeData} pros= {[]}
                    />
                } 
                {
                    cons ?
                    <ConsContainer
                    changeData = {changeData}
                    cons={cons}
                    /> :
                    <ConsContainer
                    changeData = {changeData}
                    cons={[]}
                    /> 

                }
             </div>
             }

        
                

        </div>
    )
};

export default Table;