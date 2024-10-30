import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import "./UrlControl.css";

const UrlControl = ({ url }) => {
  const copyText = () => {
    navigator.clipboard.writeText(url);
    alert("복사완료");
  };

  return (
    <InputGroup>
      <FormControl type="text" value={url} disabled />
      <Button variant="secondary" onClick={copyText}>
        주소복사
      </Button>
    </InputGroup>
  );
};

export default UrlControl;
