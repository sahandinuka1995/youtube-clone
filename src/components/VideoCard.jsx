import React from 'react'
import {Link} from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";
import {videoCard} from "../const/const";
import {Card} from 'reactstrap'

const VideoCard = ({video: {id: {videoId}, snippet}, titleLength}) => {

    const videoPath = videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`
    const videoPath2 = videoId ? `/video/${videoId}` : demoVideoUrl
    const videoThumbnail = snippet?.thumbnails?.high?.url || demoThumbnailUrl
    const title = snippet?.title.slice(0, titleLength) || demoVideoTitle.slice(0, titleLength)
    const channelLink = snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
    const channelName = snippet?.channelTitle || demoChannelTitle

    return (<Card>
        <Link to={videoPath}>
            <img src={videoThumbnail} alt={snippet?.title} width={'100%'}/>
        </Link>
        <div style={videoCard.CardContent}>
            <Link to={videoPath2} style={videoCard.link}>
                <p style={videoCard.videoTitle}>
                    {title}...
                </p>
            </Link>
            <Link to={channelLink} style={videoCard.channelLink}>
                <p>
                    {channelName}
                    <CheckCircleIcon sx={videoCard.checkCircleIcon}/>
                </p>
            </Link>
        </div>
    </Card>)
};

export default VideoCard
