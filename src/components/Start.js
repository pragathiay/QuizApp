import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuItem,
  TextField,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";

const Start = () => {
  return (
    <div className="header">
      <h1>Quiz App🤔 </h1>
      <div className="Text-Feild">
        <TextField
          label="enter your name"
          variant="outlined"
          className="text"
        ></TextField>
        <br></br>
      </div>
      <div className="selection-box">
        <FormControl variant="outlined" className="language">
          <InputLabel id="demo-simple-select-outlined-label">
            select language
          </InputLabel>
          <Select
            variant="outlined"
            labelId="demo-simple-select-outlined-label"
          >
            <MenuItem value="Kannada">Kannada</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindhi">Hindhi</MenuItem>
          </Select>
        </FormControl>
      </div>

      <br></br>
      <button className="start-btn">
        <NavLink to="/result">Start</NavLink>
      </button>
    </div>
  );
};

export default Start;
