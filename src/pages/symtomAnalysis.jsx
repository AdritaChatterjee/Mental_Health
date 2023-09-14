// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import SyntomanalysisButton from '../component/SyntomanalysisButton'
// // import './SymtomAnalysis.css';
// export default function SymtomAnalysis() {
//     const [apiData, setApiData] = useState([])
//     const [dataIndex, setDataIndex] = useState(0)
//     const getJsonSymtoms = async () => {
//         const url = "https://pallab00122.github.io/mental-health/josnDatas/systomsAnalyisis.json";
//         const res = await axios.get(url);
//         return res.data;
//     }
//     useEffect(() => {
//         getJsonSymtoms().then((data) => {
//             setApiData(data)
//         }).catch((error) => {
//             console.log(error);
//         })
//     }, [apiData])

//     return (
//         <>
//             <div >
//                 {
//                     apiData.map((ele, index) => {
//                         return <SyntomanalysisButton title={ele.title} setDataIndex={setDataIndex} index={index} />
//                     })
//                 }
//             </div>
//             <div>
//                 {<>
//                     <h3>{apiData[dataIndex].description}</h3>
//                     <ul>
//                         {
//                             apiData[dataIndex].symtoms.map((symtom) => {
//                                 return <li>{symtom}</li>
//                             })
//                         }</ul>
//                 </>
//                 }
//             </div>

//         </>)
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SyntomanalysisButton from '../component/SyntomanalysisButton';

export default function SymtomAnalysis() {
  const [apiData, setApiData] = useState([]);
  const [dataIndex, setDataIndex] = useState(0);

  const getJsonSymtoms = async () => {
    const url = "https://pallab00122.github.io/mental-health/josnDatas/systomsAnalyisis.json";
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
      return []; // Return an empty array in case of an error
    }
  };

  useEffect(() => {
    getJsonSymtoms().then((data) => {
      setApiData(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div>
        {apiData.map((ele, index) => {
          return (
            <SyntomanalysisButton
              key={index}
              title={ele.title}
              setDataIndex={setDataIndex}
              index={index}
            />
          );
        })}
      </div>
      <div>
        {apiData.length > 0 && dataIndex < apiData.length && (
          <>
            <h3>{apiData[dataIndex].description}</h3>
            <ul>
              {apiData[dataIndex].symtoms.map((symtom, index) => {
                return <li key={index}>{symtom}</li>;
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
