// import "./index.css";
import StyleTest from "./StyleTest";
import { RouterProvider } from "react-router-dom";
import router from "./main-router";
import Contact from "./components/contact/Contact";
import GuestBook from "./components/gusetbook/GuestBook";
import TabList from "./components/tabList/TabList";
import WeddingGift from "./components/weddinggift/WeddingGift";

function App() {
  const name = "name";
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
