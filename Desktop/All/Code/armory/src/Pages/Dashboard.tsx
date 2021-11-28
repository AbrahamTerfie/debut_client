import React from "react";
import { Button, Row, Col } from "reactstrap";
import ParentCards from "../Components/ParentCards";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "../Routes/Routes";
interface Props {
  children?: React.ReactNode;
}

export default function Dashboard() {
  return (
    <div className="Landing">
      <h1>armory</h1>

      <h3>business suit</h3>
      <Row>
        <Col sm={6} md={6} lg={4}>
          <Link to={routes.finance}>
            <ParentCards name="finance" color="#E63946" />
          </Link>

          <Link to={routes.sales}>
            <ParentCards name="sales" color="#A8DADC" />
          </Link>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Link to={routes.purchase}>
            <ParentCards name="purchase" color="#457B9D" />
          </Link>
          <Link to={routes.warehouse}>
            <ParentCards name="warehouse" color="#1D3557" />
          </Link>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <Link to={routes.humanres}>
            <ParentCards name="hr" color="#3D2253" />
          </Link>
          <Link to={routes.settings}>
            <ParentCards name="settings" color="#D7C646" />
          </Link>
        </Col>
      </Row>

      <Row className="footer">
        <h3>efuye inc. 2021</h3>
      </Row>
    </div>
  );
}
