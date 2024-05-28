// import "./index.css";
import StyleTest from "./StyleTest";
import { RouterProvider } from "react-router-dom";
import router from "./main-router";
import Contact from "./components/contact/Contact";
import GuestBook from "./components/gusetbook/GuestBook";
import Schedule from "./components/schedule/Schedule";
import TabList from "./components/tabList/TabList";
import WeddingGift from "./components/weddinggift/WeddingGift";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const name = "name";
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
