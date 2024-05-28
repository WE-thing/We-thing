import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Home from "../components/home/Home";
import Invitation from "../components/invitation/Invitation";
import Location from "../components/location/Location";
import Gallery from "../components/gallery/Gallery";
export default function InvitationPage() {
  const { id } = useParams();
  const [invitation, setInvitation] = useState(null);

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:3000/api/invitations/${id}`)
      .then((response) => setInvitation(response.data))
      .catch((error) => console.error("Error fetching invitation:", error));
  }, [id]);

  if (!invitation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Home invitation={invitation}></Home>
      <Invitation invitation={invitation}></Invitation>
      <Location invitation={invitation}></Location>
      <Gallery invitation={invitation}></Gallery>
    </>
  );
}
