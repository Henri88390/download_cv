import { ExperienceCard } from "components";
import { Address, Experience, Position } from "models";
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
        position: { lat: 49.6142611, lng: 6.1275704 } as Position,
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
        position: { lat: 48.655282, lng: 6.1499824 } as Position,
      } as Address,
      startDate: new Date(2021, 3).toDateString(),
      endDate: new Date(2021, 6).toDateString(),
      jobTitle: "Software developer",
    } as Experience,
    {
      logoUrl: "icons/ul-logo.png",
      companyName: "Faculté des Sciences et Techniques",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "54500",
        city: "Vandœuvre-lès-Nancy",
        country: "France",
        position: { lat: 48.655282, lng: 6.1499824 } as Position,
      } as Address,
      startDate: new Date(2019, 8).toDateString(),
      endDate: new Date(2020, 6).toDateString(),
      jobTitle: "Master's degree in IT & Machine learning",
    } as Experience,
    {
      logoUrl: "icons/ul-logo.png",
      companyName: "UFR MIM",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "54500",
        city: "Metz",
        country: "France",
        position: { lat: 48.655282, lng: 6.1499824 } as Position,
      } as Address,
      startDate: new Date(2018, 8).toDateString(),
      endDate: new Date(2019, 6).toDateString(),
      jobTitle: "Master's degree (1st year)",
    } as Experience,
    {
      logoUrl: "icons/ul-logo.png",
      companyName: "UFR MIM",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "57000",
        city: "Metz",
        country: "France",
        position: { lat: 48.655282, lng: 6.1499824 } as Position,
      } as Address,
      startDate: new Date(2017, 8).toDateString(),
      endDate: new Date(2018, 6).toDateString(),
      jobTitle: "Bachelor's degree in IT",
    } as Experience,
    {
      logoUrl: "icons/ul-logo.png",
      companyName: "IUT Metz",
      address: {
        streetNumber: 2,
        streetName: "Allée du Parc de Brabois",
        postCode: "57000",
        city: "Metz",
        country: "France",
        position: { lat: 48.655282, lng: 6.1499824 } as Position,
      } as Address,
      startDate: new Date(2015, 9).toDateString(),
      endDate: new Date(2017, 6).toDateString(),
      jobTitle: "DUT (2-year diploma) in IT",
    } as Experience,
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

  return (
    <div className="experiences-page">
      <div className="__experiences-title">EXPERIENCES</div>
      <div className="__experiences-body">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.startDate} props={experience} />
        ))}
      </div>
    </div>
  );
}

export default ExperiencesPage;
