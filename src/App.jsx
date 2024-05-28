// import "./index.css";
import StyleTest from "./StyleTest";
import Contact from "./components/contact/Contact";
import GuestBook from "./components/gusetbook/GuestBook";
import TabList from "./components/tabList/TabList";
import WeddingGift from "./components/weddinggift/WeddingGift";

function App() {
  const name = "name";
  return (
    <>
      <div>
        {/* <StyleTest /> */}
        <Contact />
        <GuestBook />
        <WeddingGift />
        <TabList />
      </div>
    </>
  );
}

export default App;
