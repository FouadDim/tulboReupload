import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./Conditions.css";

function Privacy() {
  const file_name = "privacy.md";
  const [post, setPost] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import(`./othermd/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .then(setLoaded(true))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="about">
      <div className={loaded == false ? "main0z1" : "noneee1"}>
        <img
          width="120px"
          src="https://i.pinimg.com/originals/f6/65/6a/f6656aa6fdb6b8f905dea0bcc2d71dd8.gif"
          alt=""
        />
      </div>
      <div className="main02">
        <Markdown>{post}</Markdown>
      </div>
    </div>
  );
}

export default Privacy;
