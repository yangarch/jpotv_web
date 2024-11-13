import React, { useState, useEffect } from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import ChannelList from "./components/ChannelList/ChannelList";
import HlsPlayer from "./components/HlsPlayer/HlsPlayer";
import UrlControl from "./components/UrlControl/UrlControl";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [channels, setChannels] = useState([]);
  const [streamUrl, setStreamUrl] = useState("");
  const [isChannelsAvailable, setIsChannelsAvailable] = useState(true);

  useEffect(() => {
    fetch("/output.json")
      .then((response) => response.json())
      .then((data) => {
        const channelArray = Object.entries(data).map(([channel, url]) => ({ channel, url }));
        setChannels(channelArray);

        if (channelArray.length > 0) {
          setStreamUrl(channelArray[0].url);
          setIsChannelsAvailable(true);
        } else {
          setStreamUrl("");
          setIsChannelsAvailable(false);
        }
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setIsChannelsAvailable(false);
      });
  }, []);

  const handleSelectChannel = (url) => {
    setStreamUrl(url);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>JPOTV</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        {isChannelsAvailable ? (
          <>
            <Row className="mt-3">
              <ChannelList channels={channels} onSelectChannel={handleSelectChannel} />
            </Row>
            <Row>
              <HlsPlayer src={streamUrl} />
            </Row>
            <Row className="pb-3">
              <UrlControl url={streamUrl} />
            </Row>
          </>
        ) : (
          <Row className="mt-3">
            <h3>현재 시청 가능한 채널이 없습니다</h3>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default App;
