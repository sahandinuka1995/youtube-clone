import React from "react";
import {Loader, VideoCard} from "./";
import {Col, Row} from "reactstrap";
import {video} from "../const/const";

const Videos = ({data, sizes, titleLength}) => {
    if (!data?.length) return <Loader/>;

    return (
        <Row>
            {data.map((item, id) => (
                <Col md={sizes.md} sm={sizes.sm} xs={sizes.xs} lg={sizes.lg} key={id} style={video.col}>
                    <VideoCard video={item} titleLength={titleLength}/>
                </Col>
            ))}
        </Row>
    );
}

export default Videos;
