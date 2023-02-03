import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Videos} from "./";
import {searchFeed} from "../const/const";
import {Col, Row} from "reactstrap";

const SearchFeed = () => {
    const [allVideos, setAllVideos] = useState(null);
    const allSearchTerm = useParams().searchTerm

    useEffect(() => {
        loadData()
    }, [allSearchTerm]);

    const loadData = () => {
        const url = `search?part=snippet&q=${allSearchTerm}`
        fetchFromAPI(url)
            .then((data) => {
                setAllVideos(data.items)
            })
    }

    return (
        <Row>
            <p style={searchFeed.typography}>
                Search Results for <span style={searchFeed.span}>{allSearchTerm}</span> videos
            </p>
            <Col md={12} style={searchFeed.videoList}>
                {<Videos data={allVideos} sizes={{md: 4, sm: 6, xs: 12, lg: 2}} titleLength={40}/>}
            </Col>
        </Row>
    );
};

export default SearchFeed;
