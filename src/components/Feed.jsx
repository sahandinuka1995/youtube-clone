import React, {useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Videos, Sidebar} from "./";
import {feed} from "../const/const";
import {Col, Row} from "reactstrap";

const Feed = () => {
    const [selectedCat, setSelectedCat] = useState("New");
    const [allVideos, setAllVideos] = useState(null);

    useEffect(() => {
        loadAllVideos()
    }, [selectedCat]);

    const loadAllVideos = () => {
        fetchFromAPI(`search?part=snippet&q=${selectedCat}`)
            .then((data) => {
                setAllVideos(data.items)
            })
    }

    return (
        <Row style={feed.stack}>
            <Col md={2} style={feed.box}>
                <Sidebar selectedCat={selectedCat} setSelectedCat={(name) => {
                    setSelectedCat(name)
                }}/>
                <p className="copyright" style={feed.typography}>
                    Copyright © 2023 YouTube Clone
                </p>
            </Col>

            <Col md={10} style={feed.box2}>
                <p style={feed.typography2} className={'lbl-selected'}>
                    {selectedCat} <span style={feed.span}>videos</span>
                </p>

                <Videos data={allVideos} sizes={{md: 4, sm: 6, xs: 12, lg: 2}} titleLength={40}/>
            </Col>
        </Row>
    );
};

export default Feed;
