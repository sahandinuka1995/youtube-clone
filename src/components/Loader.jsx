import React from 'react';
import {Col, Row} from "reactstrap";
import {loader} from "../const/const";

const Loader = () => (
    <Row>
        <Col align={'center'} style={loader.col}>
            <span className="loader"></span>
        </Col>
    </Row>
);

export default Loader;
