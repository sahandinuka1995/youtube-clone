import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import BarChart from "@mui/icons-material/BarChart";
import {Videos, Loader} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {videoDetails} from "../const/const";
import {Col, Row} from "reactstrap";

const VideoDetail = () => {
    const [videoData, setVideoData] = useState(null);
    const [allVideos, setAllVideos] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        loadVideo()
    }, [id]);

    const loadVideo = () => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoData(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setAllVideos(data.items))
    }

    if (!videoData?.snippet) return <Loader/>;
    const {snippet: {title, channelId, channelTitle, thumbnails: {high}}, statistics: {viewCount, likeCount}} = videoData;
    const videoUrl = `https://www.youtube.com/watch?v=${id}`
    const channelUrl = `/channel/${channelId}`

    return (<Row>
            <Col md={9}>
                <div style={videoDetails.box}>
                    <ReactPlayer url={videoUrl} className="react-player" controls/>
                    <p style={videoDetails.title}>{title}</p>
                    <div style={videoDetails.stack2}>
                        <Link to={channelUrl} style={videoDetails.channelLink}>
                            <img src={high.url} style={videoDetails.channelLogo}/>
                            <p style={videoDetails.typography}>
                                {channelTitle}
                                <CheckCircleIcon sx={videoDetails.checkCircleIcon}/>
                            </p>
                        </Link>
                        <div style={videoDetails.viewsLikes}>
                            <p style={videoDetails.typography2}>
                                <ThumbUpAlt sx={videoDetails.icon}/>
                                {parseInt(viewCount).toLocaleString()} views
                            </p>
                            <p style={videoDetails.typography3}>
                                <BarChart sx={videoDetails.icon}/>
                                {parseInt(likeCount).toLocaleString()} likes
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={3} style={videoDetails.sideBar}>
                <Videos data={allVideos} sizes={{md: 12, sm: 6, xs: 6, lg: 6}} titleLength={25}/>
            </Col>
        </Row>
    );
};

export default VideoDetail;
