import React from "react";
import { Col } from "reactstrap";
interface ParentCardProps {
  name: string;
  color: string;
}

export default function ParentCards(props: ParentCardProps) {
  return (
    <Col sm={12} md={3} lg={4}  >  
      <div style={{ backgroundColor: props.color }} className="parentCard">
        <h2>{props.name}</h2>
      </div>
    </Col>
  );
}
