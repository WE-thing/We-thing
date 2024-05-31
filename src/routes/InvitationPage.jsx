import React, { useEffect, useState, useRef } from "react";
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
  const [websiteMode, setWebsiteMode] = useState(false);
  const guestBookRef = useRef(null);
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

  const scrollToGuestBook = () => {
    console.log(guestBookRef.current);
    if (guestBookRef.current) {
      guestBookRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" max-w-[450px] mx-auto bg-white">
      <Home
        invitation={invitation}
        websiteMode={websiteMode}
        setWebsiteMode={setWebsiteMode}
      ></Home>

      {websiteMode ? (
        <>
          <Invitation invitation={invitation}></Invitation>
          <Location invitation={invitation}></Location>
          <Gallery invitation={invitation}></Gallery>
          <Contact />
          <GuestBook ref={guestBookRef}/>
          <WeddingGift />
          <TabList scrollToGuestBook={scrollToGuestBook} />
        </>
      ) : null}
    </div>
  );
}
