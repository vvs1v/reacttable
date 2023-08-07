import React, { useState ,useEffect } from "react";
import { ReactDOM } from "react";
import "../style.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

import table2 from "./table2"

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCarousel,
    MDBCarouselInner,
    
  } from "mdb-react-ui-kit";


import Table from "./sampletable"
import tableName from "./tableName.jsx"

import logosvg from "../images/svg1.svg"
import TableName from "./tableName.jsx";
import TableDetails from "./TableDetails";

function Body () {

    const data1 = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Alice", age: 30},
        { id: 3, name: "Bob", age: 22},
    ];
    const data = [
        {id : 1,name: "T_ORD"},{id :2,name: "T_ORD_ITEM"},{ id:3,name: "HR_EMP"},{id:4,name:"T_INV"},{id:5,name:"HR_DEPT"},{id:6,name:"HR_JOB"}
    ];

    const data2 = [
        
            {"HR_EMP":[
                {id : 1,Column_Name:"Table Name",Field:"HR_EMP"},
                {id : 2,Column_Name:"Source System",Field:"HRIS"},
                {id : 3,Column_Name:"Department",Field:"Human Resources"},
                {id : 4,Column_Name:"Business Name",Field:''},
                {id : 5,Column_Name:"Business Description",Field:''},
                {id : 6,Column_Name:"Contains PI",Field:' '},
    ]},
    {"T_ORD":[
        {id : 1,Column_Name:"Table Name",Field:"t_ORD"},
        {id : 2,Column_Name:"Source System",Field:"HRIS"},
        {id : 3,Column_Name:"Department",Field:"Human Resources"},
        {id : 4,Column_Name:"Business Name",Field:''},
        {id : 5,Column_Name:"Business Description",Field:''},
        {id : 6,Column_Name:"Contains PI",Field:' '},
]},
{"t_ORD_ITEM":[
    {Column_Name:"Table Name",Field:"T_ORD_ITEM"},
    {Column_Name:"Source System",Field:"HRIS"},
    {Column_Name:"Department",Field:"Human Resources"},
    {Column_Name:"Business Name",Field:''},
    {Column_Name:"Business Description",Field:''},
    {Column_Name:"Contains PI",Field:' '},
]},
{"T_INV":[
    {Column_Name:"Table Name",Field:"T_INV"},
    {Column_Name:"Source System",Field:"HRIS"},
    {Column_Name:"Department",Field:"Human Resources"},
    {Column_Name:"Business Name",Field:''},
    {Column_Name:"Business Description",Field:''},
    {Column_Name:"Contains PI",Field:' '},
]},
{"HR_DEPT":[
    {Column_Name:"Table Name",Field:"HR_DEPT"},
    {Column_Name:"Source System",Field:"HRIS"},
    {Column_Name:"Department",Field:"Human Resources"},
    {Column_Name:"Business Name",Field:''},
    {Column_Name:"Business Description",Field:''},
    {Column_Name:"Contains PI",Field:' '},
]},
{"HR_JOB":[
    {Column_Name:"Table Name",Field:"HR_JOB"},
    {Column_Name:"Source System",Field:"HRIS"},
    {Column_Name:"Department",Field:"Human Resources"},
    {Column_Name:"Business Name",Field:''},
    {Column_Name:"Business Description",Field:''},
    {Column_Name:"Contains PI",Field:' '},
],},
        
    ]
    const handleClick=(event)=>{
        console.log(event.currentTarget)
    }

    return <>

    <div>
        
        
        <div className="div1">

            <div className="row">
                <div className="col-lg-2" style={{}}>
                    <div style={{background: "black", color:"white",marginBottom:'0px'}}><h5 style={{marginBottom:'0px',marginLeft:'2px'}}>Tables</h5></div>
                    <div  className="tablediv"><TableName data={data} onClick = {handleClick} /></div>
                </div>
                <div className="col-lg-9" style={{}}>
                <div className="row" style={{background: "black", color:"white",marginBottom:'0px'}}><h5 style={{marginBottom:'0px',marginLeft:'2px'}}>Metadata</h5></div>
                <div  className="row"  style={{border:'2px solid black',height:'70vh'}}>
                    <div className="col-lg-4" style={{height:'100%'}}>
                       <TableDetails data = {data2} />
                    </div>
                    <div className="col-lg-8" style={{background:'blue',height:'100%'}}>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div></>
}

export default Body;