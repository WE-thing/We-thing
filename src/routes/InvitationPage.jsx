import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Home from "../components/home/Home";
import Invitation from "../components/invitation/Invitation";
import Location from "../components/location/Location";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/Contact";
import GuestBook from "../components/gusetbook/GuestBook";
import WeddingGift from "../components/weddinggift/WeddingGift";
import TabList from "../components/tabList/TabList";
export default function InvitationPage() {
  const { id } = useParams();
  const [invitation, setInvitation] = useState(null);

  useEffect(() => {
    console.log(id);
    axios
      .get(`/api/invitations/${id}`)
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
      <Contact />
      <GuestBook />
      <WeddingGift />
      <TabList />
    </>
  );
}
