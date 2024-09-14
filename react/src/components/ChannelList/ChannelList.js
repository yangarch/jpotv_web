import React from "react";
import { ListGroup } from "react-bootstrap";

import "./ChannelList.css";

const ChannelList = ({ channels }) => {
  return (
    <ListGroup horizontal>
      {channels.map((channel, index) => (
        <ListGroup.Item key={index}>{channel}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChannelList;
