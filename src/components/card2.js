import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';


// function Card() {
//     const [data, setData] = useState({});
//     useEffect(()=>{
//         axios
//         .get('https://api.nasa.gov/planetary/apod?api_key=xogsnInRUlQ4TuM9Am7dg1Txz8TWBFd0fadZv1aa')
//         .then(res => setData(res.data) )
//     },[])
//     console.log(data);
//     return (
//         <div className='wrapper'>
//             <h1>{data.title}</h1>
//             <h3 id='date'>{data.date}</h3>
//             <img alt={data.title}src={data.url}></img>
//             <p>{data.explanation}</p>


//         </div>
//     )
// }
const Card2 = (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
                axios
                .get('https://api.nasa.gov/planetary/apod?api_key=xogsnInRUlQ4TuM9Am7dg1Txz8TWBFd0fadZv1aa')
                .then(res => setData(res.data) )
            },[])
            console.log(data);
            return (
                <div>
                    <Card>
                        <CardBody>
                        <CardTitle id='title'>{data.title}</CardTitle>
                        <CardSubtitle id='date'>{data.date}</CardSubtitle>
                        <CardImg src={data.url} alt={data.title} />
                        <CardSubtitle id='explanation'>{data.explanation}</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            )
}

export default Card2;