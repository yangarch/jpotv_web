import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

import "./ChannelList.css";

const ChannelList = ({ channels, onSelectChannel }) => {
  const [validChannels, setValidChannels] = useState([]);

  useEffect(() => {
    const checkThumbnails = async () => {
      const results = await Promise.all(
        channels.map(async ({ channel, url }) => {
          try {
            const res = await fetch(`/thumbnail/${channel}.png`, { method: "HEAD" });
            return res.ok ? { channel, url } : null;
          } catch {
            return null;
          }
        })
      );
      setValidChannels(results.filter(Boolean));
    };

    if (channels.length > 0) {
      checkThumbnails();
    }
  }, [channels]);

  return (
    <ListGroup horizontal>
      {validChannels.map(({ channel, url }, index) => (
        <ListGroup.Item key={index} onClick={() => onSelectChannel(url)} className="channel-item">
          <img src={`/thumbnail/${channel}.png`} alt={channel} />
          <span>{channel}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChannelList;
