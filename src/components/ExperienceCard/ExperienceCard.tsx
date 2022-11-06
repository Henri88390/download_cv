import { Map } from "components";
import { Experience } from "models";
import Moment from "moment";
import React from "react";
import "./ExperienceCard.scss";

function ExperienceCard({ props }: Experience) {
  const formatStartDate = Moment(props.startDate).format("MMM YYYY");
  const formatEndDate = Moment(props.endDate).format("MMM YYYY");
  return (
    <div className="experience-card__wrapper">
      <div className="experience-card__header">
        <img
          src={props.logoUrl}
          className="experience-card__logo"
          alt="Company logo"
        ></img>
        <div className="experience-card__titles">
          <div className="experience-card__company-name">
            {props.companyName}{" "}
          </div>
          <div className="experience-card__dates">
            {formatStartDate} - {formatEndDate}
          </div>
        </div>

        <div className="experience-card__index">{props.index}</div>
      </div>
      <div className="experience-card__description">
        {props.jobTitle}
        <div className="experience-card__job-address">
          {props.address.city} - {props.address.country}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
