import React, { Component } from "react";
import chevron from "../chevron.png";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Sites from "./Sites";
import "./Details.css";

class Details extends Component {
  render() {
    const { title, images, contacts, address } = this.props.details;
    return (
      <div className="details-wrapper">
        <div className="sites-wrapper">
          <div className="chevron-wrapper" onClick={this.props.onClickHandler}>
            <img
              width={20}
              height={20}
              className="details-chevron"
              src={chevron}
              alt="Chevron Icon"
            />
          </div>
          <Sites
            hideChevron={true}
            hideHoverEffects={true}
            imageUrl={images && images.length !== 0 && images[0]}
            mainContact={`${contacts.main.firstName} ${contacts.main.lastName}`}
            siteAddress={address && `${address.street}`}
            siteName={title}
          />
        </div>
        <img className="detailed-image" src={images[0]} alt="Detailed IMG" />
        <div className="additionalInfo">
          <div>
            <FaUser size="2em" className="info-icons" />
            <div>
              {`${contacts.main.firstName} ${contacts.main.lastName}`}
              <div className="para-job">{contacts.main.jobTitle}</div>
            </div>
          </div>
          <div>
            <IoIosCall size="2em" className="info-icons" />
            {contacts.main.phoneNumber}
          </div>
          <div>
            <GrMail size="2em" className="info-icons" />
            {contacts.main.email}
          </div>
          <div>
            <IoLocationSharp size="2em" className="info-icons" />
            {address && `${address.street}`}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
