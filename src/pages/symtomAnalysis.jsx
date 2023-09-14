import React, { useEffect, useState } from 'react'
import axios from "axios"
import SyntomanalysisButton from '../component/SyntomanalysisButton'
export default function SymtomAnalysis() {
    const [apiData, setApiData] = useState([])
    const [dataIndex, setDataIndex] = useState(0)
    const getJsonSymtoms = async () => {
        const url = "https://pallab00122.github.io/mental-health/josnDatas/systomsAnalyisis.json";
        const res = await axios.get(url);
        return res.data;
    }
    useEffect(() => {
        getJsonSymtoms().then((data) => {
            setApiData(data)
        }).catch((error) => {
            console.log(error);
        })
    }, [apiData])

    return (
        <>
            <div >
                {
                    apiData.map((ele, index) => {
                        return <SyntomanalysisButton title={ele.title} setDataIndex={setDataIndex} index={index} />
                    })
                }
            </div>
            <div>
                {<>
                    <h3>{apiData[dataIndex].description}</h3>
                    <ul>
                        {
                            apiData[dataIndex].symtoms.map((symtom) => {
                                return <li>{symtom}</li>
                            })
                        }</ul>
                </>
                }
            </div>

        </>)
}
