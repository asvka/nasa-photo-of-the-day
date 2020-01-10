import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components';


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
const Title = styled.h1`
    font-size: 4rem;
    text-shadow: -1px 0 #b58deb, 0 1px #b58deb, 1px 0 #b58deb, 0 -1px #b58deb;
    `;
const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    padding: 2%;
    padding-left: 15%;
    padding-right: 15%;
`;
const Image = styled.img`
    width: 70%;
    height: auto;
    border-radius: 50px;
    box-shadow: 10px 10px white;
`;
const Date = styled.h2`
    font-style: italic;
    font-size: 2rem;
    padding: 2%;
`;

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
                        <Title>{data.title}</Title>
                        <Date>{data.date}</Date>
                        <Image src={data.url} alt={data.title} />
                        <Paragraph>{data.explanation}</Paragraph>
                        <Paragraph>Copyright: {data.copyright}</Paragraph>
                        </CardBody>
                    </Card>
                </div>
            )
}

export default Card2;