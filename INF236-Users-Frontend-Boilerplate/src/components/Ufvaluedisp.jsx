import React, { useState, useEffect } from 'react';

const Ufvalue = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/posteriores/2024/05/dias/09?apikey=7ec026e8a3fe3a061be49ecf9c3738f474eceb35&formato=json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        setData(jsonData.UFs[0].Valor);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    

    return data;

};

export default Ufvalue;