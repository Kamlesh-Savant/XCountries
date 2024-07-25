import React from 'react';
import {useEffect, useState} from 'react';
import './Home.css';

function Home() {
    const [data, setData] = useState([]);

    const fetch_data = async ()=>{
      const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
      const data = await response.json();
      setData(data);
    }
    useEffect(()=>{
      fetch_data();
    },[])
  return (

    
    <div className='container'>
        {data.map(
            (res)=>{
                return (<div className='box'>
              <img className='img' src={res.flag} alt={res.name} />
              <h3>{res.name}</h3>
            </div>)
          }
        )}
    </div>
  )
}

export default Home