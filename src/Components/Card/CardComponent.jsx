import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import "./CardComponent.scss";

function CardComponent(props) {
  return (
    <Card>
      {props.title && <CardHeader title={props.title} />}
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

export default CardComponent;
