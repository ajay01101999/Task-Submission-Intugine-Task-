import React, { useEffect, useState } from "react";
import axios from "axios";

import {Card} from '@material-ui/core';
import TableData from './Table';
import Stepper from './Stepper';
import Header from './Header';
import './App.css';
import { Typography } from "@material-ui/core";

const App = () => {

  const [data, setData]=useState([]);
  const [scan, setScan]=useState([]);
  const [status, setStatus]=useState({});

  useEffect(async () => {
    const data = {
      BearerToken: "tTU3gFVUdP",
      Body: {
        email: { email: "absharma8384@gmail.com" },
      },
    };
    await axios
      .post(`/latest/shipments/ajaysharma`, data.Body.email, {
        headers: {
          Authorization: "Bearer tTU3gFVUdP",
        },
      })
      .then((res) => {
        setData(res.data.data)
        setScan(res.data.data[0].scan)
      })
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(()=>{
    var del=0,int=0,ood=0;
    data.forEach((val)=>{
      if(val['current_status_code']=='DEL'){
        del++;
      }else if(val['current_status_code']=='INT'){
        int++;
      }else ood++;
    })
    setStatus({del,int,ood});
  },[data])

  function handleScan(data){
    setScan(data);
  }

  console.log(scan)
  return( 
    <div className='app'>
      <Header/>
      <div className='app_top'>
          <Card>
            <Typography align='left'><h3>DEL</h3></Typography>
            <Typography align='right'><h1>{status.del}</h1></Typography>
          </Card>
          <Card>
            <Typography><h3>INT</h3></Typography>
            <Typography><h1>{status.int}</h1></Typography>
          </Card>
          <Card>
            <Typography><h3>OOD</h3></Typography>
            <Typography><h1>{status.ood}</h1></Typography>
          </Card>
      </div>
      <div className='app_root'>
        <div className='app_left'>
          <Stepper stepperData={data} scanData={scan} />        
        </div>
        <div className='app_right'>
          <TableData tableData={data} handleScan={handleScan} />        
        </div>    
      </div>
    </div>
  );
};

export default App;
