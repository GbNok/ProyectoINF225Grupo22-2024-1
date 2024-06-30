import React, { useState, useEffect } from 'react';

const ReadUf = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=7ec026e8a3fe3a061be49ecf9c3738f474eceb35&formato=json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  let ufsData = null;

  if (data && data.UFs) {
      ufsData = data.UFs.map((item, index) => {

          const dateObject = new Date(item.Fecha);
  
          const options = {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC', 
          };
  
          const formattedDate = dateObject.toLocaleDateString('es-ES', options);
  
          return (
              <div key={index}>
                  <p style={{fontStyle:'italic',fontSize:'20px', padding:'20px'}}>Valor del día: {formattedDate}</p>
                  <div style={{padding:'30px', borderTop:'1px solid #eaeaea', borderBottom:'1px solid #eaeaea', margin:'25px'}}>
                  <p style={{textAlign:'center', fontSize:'30px', fontWeight:'bold', color:'#446a2b'}}>1 UF → {item.Valor}</p>
                  </div>
              </div>
          );
      });
  }

    return (
        <div style={{margin:'5%'}}>
        <h1 style={{fontSize:'100px', color:'#2c441c', fontStyle:'italic'}}>Valor UF Hoy</h1>
        {ufsData ? (
            ufsData
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
    };

export default ReadUf;