import React, { FC } from "react";  
import { getAllUsers } from "services";
import "./ContactPage.scss"; 

interface ContactPageProps {}

function ContactPage(props: FC<ContactPageProps>) {
  function getUsers() {
    getAllUsers().then((users) => {
      console.log(users);
    });
  }
  return (
    <div className="ContactPage">
      <button onClick={getUsers}>Get all users</button>
    </div>
  );
}

export default ContactPage;
