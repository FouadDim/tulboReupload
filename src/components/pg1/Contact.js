import React, { useState } from "react";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

function Contact() {
  const values = [
    {
      value: "comment",
      label: "comment",
    },
    {
      value: "feedback",
      label: "feedback",
    },
    {
      value: "report a bug",
      label: "report a bug",
    },
    {
      value: "report a product",
      label: "report a product",
    },
    {
      value: "other",
      label: "other",
    },
  ];

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="contactzz">
      <div className="al0l">
        <form
          action="https://formspree.io/f/mnqwnzay"
          method="POST"
          className="form"
        >
          <TextField
            name="Full Name"
            type="text"
            className="inp014"
            id="standard-basic"
            label="Full Name"
            helperText="Please Enter Your full Name"
            required
            variant="standard"
          />
          <TextField
            name="email adress"
            type="email"
            className="inp014"
            id="standard-basic"
            label="Email Adress"
            helperText="Please Enter Your email adress"
            required
            variant="standard"
          />
          <TextField
            name="problem"
            defaultValue={""}
            className="inp014"
            id="outlined-select-currency"
            select
            label="Select"
            // value={currency}
            onChange={handleChange}
            required
            helperText="Please select the option that matches your situation"
          >
            {values.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="message"
            required
            type="text"
            className="inp014"
            id="standard-basic"
            label={
              value === "other" ||
              value === "report a bug" ||
              value === "report a product"
                ? "Message or Problem Description"
                : "Message"
            }
            variant="standard"
            helperText={
              value === "other" ||
              value === "report a bug" ||
              value === "report a product"
                ? "Please Enter your Message or Describe a problem"
                : "Please enter your Message"
            }
          />
          <Button
            style={{ backgroundColor: "#1976d2", color: "white" }}
            type="submit"
            variant="contained"
          >
            Submit form
          </Button>
          <div className="othercontact">
            <h5 className="h5">Or via:</h5>
            <div className="optttt">
              <img
                style={{ marginLeft: "5px" }}
                width="10px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
                alt=""
              />
              <h5 className="h4">service.tulbo@gmail.com</h5>
            </div>
            <div className="optttt">
              <img
                width="20px"
                src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                alt=""
              />
              <h5 className="h4">+961 76 904-134</h5>
            </div>
          </div>
        </form>
      </div>
      <div className="al1l">
        <h2>Or via:</h2>
        <div className="opttt">
          <img
            width="40px"
            src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
            alt=""
          />
          <h4>+961 76 904-134</h4>
        </div>
        <div className="opttt" style={{ paddingLeft: "6px" }}>
          <img
            width="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png"
            alt=""
          />
          <h4>service.tulbo@gmail.com</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
