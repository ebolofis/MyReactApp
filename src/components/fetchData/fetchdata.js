import React, {useState,setState}  from 'react';
import Button from 'react-bootstrap/Button';
import './fetchdata.css';

function FetchData(){
    let data = [];

    const [data2,setData] =	useState(data); // one of the most important React Hooks
    console.log("data2 = ",data2);
    const clickGetData =() => {
        let dataArray = [];

        fetch('https://api.npms.io/v2/search?q=react') //httpget
        .then(response => response.json())
        .then(data => console.log(data));

        setData(dataArray); //asssign a new value to this state and revaluate the component
        console.log(dataArray);
    }

    return ( <Button onClick={clickGetData}  variant="primary">Click Me!</Button>)
}

export default FetchData;