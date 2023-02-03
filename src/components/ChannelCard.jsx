import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from 'react-router-dom';
import {channelCard} from "../const/const";
import {Col, Row} from "reactstrap";

const ChannelCard = ({data, marginTop}) => {
    const channelUrl = `/channel/${data?.id}`
    const channelLogo = data?.snippet?.thumbnails?.high?.url
    const channelName = data?.snippet?.title
    const customUrl = data?.snippet?.customUrl

    return (<Row
        style={{
            ...channelCard.box,
            marginTop,
        }}
    >
        <Link to={channelUrl} style={channelCard.channelLink}>
            <Col style={channelCard.cardContent} md={12}>
                <img src={channelLogo} style={channelCard.channelLogo}/>
                <p style={channelCard.channelName}>
                    {channelName}{' '}
                    <CheckCircleIcon sx={channelCard.checkCircleIcon}/>
                </p>
                <p>{customUrl}</p>
                {data?.statistics?.subscriberCount && (
                    <p style={channelCard.typography}>
                        {parseInt(data?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </p>
                )}
            </Col>
        </Link>
    </Row>)
};

export default ChannelCard;
