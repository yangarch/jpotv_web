import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const UrlControl = ({ url }) => {
  const copyText = () => {
    navigator.clipboard.writeText(url); // 클립보드에 URL 복사
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
