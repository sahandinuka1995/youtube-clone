import {Link} from "react-router-dom";
import logo from "../assets/img/logo.png";
import {SearchBar} from "./";
import {navbar} from "../const/const";
import {Col, Row} from "reactstrap";
import React from "react";

const Navbar = () => (
    <Row style={navbar.stack}>
        <Col md={3}>
            <Link to="/" style={navbar.link} className={'logo-container'}>
                <img src={logo} alt="logo" width={100}/>
            </Link>
        </Col>
        <Col md={3}>
            <SearchBar/>
        </Col>
    </Row>
);

export default Navbar;
