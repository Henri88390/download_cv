import { ExperienceCard, Map } from "components";
import { Address, Experience, Position } from "models";
import { MapMarker } from "models/marker";
import React, { FC, useEffect, useState } from "react";
import "./ExperiencesPage.scss";

interface ExperiencesPageProps {}

function ExperiencesPage(props: FC<ExperiencesPageProps>) {
  const [experiences, setExperiences] = useState([
    {
      logoUrl: "icons/riverbank-logo.jpg",
      companyName: "RiverBank S.A.",
      address: {
        streetNumber: 5,
        streetName: "Boulevard Royal",
        postCode: "2449",
        city: "Luxembourg",
        country: "Luxembourg",
        position: { lat: 49.614261, lng: 6.1252744 } as Position,
      } as Address,
      startDate: new Date(2021, 6).toDateString(),
      endDate: new Date(2022, 10).toDateString(),
      jobTitle: "Software developer",
    } as Experience,
    {
      logoUrl: "icons/cnrs-logo.png",
      companyName: "CNRS INIST",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "54500",
        city: "Vandœuvre-lès-Nancy",
        country: "France",
        position: { lat: 48.655282, lng: 6.1477937 } as Position,
      } as Address,
      startDate: new Date(2021, 3).toDateString(),
      endDate: new Date(2021, 6).toDateString(),
      jobTitle: "Software developer",
    } as Experience,
    {
      logoUrl: "icons/ul-logo.png",
      companyName: "Université de Lorraine",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "54500",
        city: "Metz/Vandœuvre-lès-Nancy",
        country: "France",
        position: { lat: 48.6651218, lng: 6.158936 } as Position,
      } as Address,
      startDate: new Date(2015, 8).toDateString(),
      endDate: new Date(2020, 6).toDateString(),
      jobTitle: "Master in IT & Machine learning",
    } as Experience,
    // {
    //   logoUrl: "icons/ul-logo.png",
    //   companyName: "UFR MIM",
    //   address: {
    //     streetNumber: 2,
    //     streetName: "Allée du Parc de Brabois",
    //     postCode: "54500",
    //     city: "Metz",
    //     country: "France",
    //     position: { lat: 49.094834, lng: 6.2276925 } as Position,
    //   } as Address,
    //   startDate: new Date(2018, 8).toDateString(),
    //   endDate: new Date(2019, 6).toDateString(),
    //   jobTitle: "Master's degree (1st year)",
    // } as Experience,
    // {
    //   logoUrl: "icons/ul-logo.png",
    //   companyName: "UFR MIM",
    //   address: {
    //     streetNumber: 2,
    //     streetName: "Allée du Parc de Brabois",
    //     postCode: "57000",
    //     city: "Metz",
    //     country: "France",
    //     position: { lat: 49.094834, lng: 6.2276925 } as Position,
    //   } as Address,
    //   startDate: new Date(2017, 8).toDateString(),
    //   endDate: new Date(2018, 6).toDateString(),
    //   jobTitle: "Bachelor's degree in IT",
    // } as Experience,
    // {
    //   logoUrl: "icons/ul-logo.png",
    //   companyName: "IUT Metz",
    //   address: {
    //     streetNumber: 2,
    //     streetName: "Allée du Parc de Brabois",
    //     postCode: "57000",
    //     city: "Metz",
    //     country: "France",
    //     position: { lat: 49.1202126, lng: 6.161611 } as Position,
    //   } as Address,
    //   startDate: new Date(2015, 9).toDateString(),
    //   endDate: new Date(2017, 6).toDateString(),
    //   jobTitle: "DUT (2-year diploma) in IT",
    // } as Experience,
  ] as Experience[]);

  useEffect(
    () =>
      setExperiences((prevExperiences) => {
        return prevExperiences.map((exp, index) => {
          let item = { ...exp };
          item.index = prevExperiences.length - index;
          return item;
        });
      }),
    []
  );

  let markers = [
    {
      icon: "icons/ul-logo.png",
      position: { lat: 48.6651218, lng: 6.158936 },
    } as MapMarker,
    {
      icon: "icons/ul-logo.png",
      position: { lat: 49.1206714, lng: 6.1568689 },
    } as MapMarker,
    {
      icon: "icons/cnrs-logo.png",
      position: { lat: 48.655282, lng: 6.1477937 },
    } as MapMarker,
    {
      icon: "icons/riverbank-logo.jpg",
      position: { lat: 49.614261, lng: 6.1252744 },
    } as MapMarker,
  ];

  return (
    <div className="experiences-page">
      <div className="__experiences-title">EXPERIENCES</div>
      <div className="experiences-body">
        <div className="experiences-cards">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.startDate} props={experience} />
          ))}
        </div>
        <Map
          zoom={7}
          position={{ lat: 49.1272465, lng: 6.1715362 }}
          markers={markers}
        />
      </div>
    </div>
  );
}

export default ExperiencesPage;
