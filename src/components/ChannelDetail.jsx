import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Videos, ChannelCard} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {channelDetails} from "../const/const";
import {Col, Row} from "reactstrap";

const ChannelDetail = () => {
    const [channelData, setChannelData] = useState();
    const [allVideos, setAllVideos] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetchResults();
    }, [id]);

    const fetchResults = async () => {
        await fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelData(data?.items[0]);
        });

        await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(data => {
            setAllVideos(data?.items);
        });
    };

    return (
        <Row>
            <Col md={12}>
                <div style={channelDetails.div}/>
                <ChannelCard data={channelData} marginTop="-93px"/>
            </Col>
            <Col md={12} style={channelDetails.box}>
                <Videos data={allVideos} sizes={{md: 4, sm: 6, xs: 12, lg: 2}} titleLength={40}/>
            </Col>
        </Row>
    );
};

export default ChannelDetail;
