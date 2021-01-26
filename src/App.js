import './App.css';
import Table from './Components/Table/table';
import {Get} from 'react-axios'
import React,{ useState,useEffect }  from 'react';
const axios = require('axios');


function App() {

const [groupid, setGroupId] = useState("");
const [userid, setUserId] = useState("");
  

useEffect(() => {
  axios.get(`https://avetiq-test.firebaseapp.com/user/misha_gyozalyan`)
  .then(function (response) {
  setUserId(response.data.userId);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get(`https://avetiq-test.firebaseapp.com/group/misha_gyozalyan`)
  .then(function (response) {
  setGroupId(response.data.groupId);
  })
  .catch(function (error) {
    console.log(error);
  });
},[] );



  return (
    <div className="App">
      <div className="headerText">Should I ...?</div>
      <Table group={groupid} user={userid}></Table>
    </div>
  );
}

export default App;
