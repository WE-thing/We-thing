// import "./index.css";
import StyleTest from "./StyleTest";
import Contact from "./components/contact/Contact";
import GuestBook from "./components/gusetbook/GuestBook";
import TabList from "./components/tabList/TabList";
import WeddingGift from "./components/weddinggift/WeddingGift";
import 'bootstrap/dist/css/bootstrap.min.css';

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
