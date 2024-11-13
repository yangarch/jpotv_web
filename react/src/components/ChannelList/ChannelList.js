import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";

import "./ChannelList.css";

const ChannelList = ({ channels, onSelectChannel }) => {
  const [defaultImage] = useState("/thumbnail/index.png");

  const handleError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <ListGroup horizontal>
      {channels.map(({ channel, url }, index) => (
        <ListGroup.Item key={index} onClick={() => onSelectChannel(url)} className="channel-item">
          <img src={`/thumbnail/${channel}.png`} alt={""} onError={handleError} />
          <span>{channel}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChannelList;
