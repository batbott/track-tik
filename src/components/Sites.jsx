import React, { Component } from "react";
import "./Sites.css";
import chevron from "../chevron.png";

class Sites extends Component {
  render() {
    const {
      imageUrl,
      siteName,
      siteAddress,
      mainContact,
      hideChevron,
      hideHoverEffects,
    } = this.props;
    return (
      <div
        className={hideHoverEffects ? "site-box hide-hover" : "site-box"}
        onClick={() => {
          this.props.onClickHandler();
        }}
      >
        <img className="circle-img" src={imageUrl} alt="Site IMG" />
        <div className="column">
          <h6>{siteName}</h6>
          <div>{siteAddress}</div>
          <div>{mainContact}</div>
        </div>
        {!hideChevron && (
          <img className="chevron" src={chevron} alt="Chevron Icon"></img>
        )}
      </div>
    );
  }
}

export default Sites;
