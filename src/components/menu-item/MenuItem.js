import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
//this HOC makes the router props on parent components (match, params, url, etc) available for the children
//this avoids prop drilling
export default withRouter(MenuItem);
