import React from "react";
import "../CSS/Header.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Header() {
  return (
    <div>
      <header>
        <TextField id="cname" label="Type in a City Name" variant="standard" />
        <span className="button">
          {" "}
          <Button className="TextField" size="large" variant="contained">
            Find Weather
          </Button>
        </span>
      </header>
    </div>
  );
}

export default Header;
