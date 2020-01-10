import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from 'reactstrap';
import PhotoCard from './../PhotoCard/PhotoCard';

export default function PhotoList() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=xogsnInRUlQ4TuM9Am7dg1Txz8TWBFd0fadZv1aa')
        .then(res => {
            setEntries(res.data);
        })
        .catch(err => {
            console.log("Error loading data!", err);
        });
    }, []);
    console.log('entries');

    return (
        <Container className="entry">
            <Row>
                {entries.map(entries => {
                    return (
                        <PhotoCard
                        date={entries.date}s
                        title={entries.title}
                        img={entries.hdurl}
                        desc={entries.explanation}
                        />
                    );
                })}
            </Row>
        </Container>
    );}
