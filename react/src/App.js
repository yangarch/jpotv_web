import React from "react";
import { Navbar, Container, Row } from "react-bootstrap";

import ChannelList from "./components/ChannelList/ChannelList";
import HlsPlayer from "./components/HlsPlayer";
import UrlControl from "./components/UrlControl/UrlControl";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const streamUrl =
    "https://spotvprime-livecdn.spotvnow.co.kr/spotvprime/spotvprime_pc.smil/chunklist_b9192000.m3u8?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vc3BvdHZwcmltZS1saXZlY2RuLnNwb3R2bm93LmNvLmtyL3Nwb3R2cHJpbWUvc3BvdHZwcmltZV9wYy5zbWlsLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTc3NDY5MzJ9fX1dfQ__&Signature=cOiooqQdPa-CWoE3IVKmne5yKit%7EHQw8rdQxVCfpy7UicyEFy42Tbrmz95ZB1xco5FjeGR9WjQH4H3AV9jvT2NmaqSk0XIJ3HhYt-2Gqu7iJpWKcfiRlPBDniO7Zl1tOFPzOdm2gBSrkN3m3ROAqB0cG63MEK84cED7bHG4IGSel4YQSMnW-SA-D4EPv4EV6S4rGTduXw2344hkl0E8aUrP0lafiGUuTkIG1PqwjiU1Szm11Y6valf16RPDgnX4%7EnZo%7EejYTEstsw3VQl0s-f97ryIdDcckz0ksoxcPkd5Wf0AuwHOUaElxYs0u9o8JG4CvjTRgcUhkMZmOfIrptHw__&Key-Pair-Id=APKAI2M6I5EDDXED7H5Q";

  const channels = [
    "Channel 1",
    "Channel 2",
    "Channel 3",
    "Channel 4",
    "Channel 5",
    "Channel 6",
    "Channel 7",
    "Channel 8",
    "Channel 9",
    "Channel 10",
    "Channel 6",
    "Channel 7",
    "Channel 8",
    "Channel 9",
    "Channel 10",
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>JPOTV</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-5 no-gutters">
          <ChannelList channels={channels} />
        </Row>
        <Row className="no-gutters">
          <HlsPlayer src={streamUrl} />
        </Row>
        <Row className="no-gutters">
          <UrlControl url={streamUrl}/>
        </Row>
      </Container>
    </div>
  );
};

export default App;
