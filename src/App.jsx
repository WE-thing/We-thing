// import "./index.css";

import StyleTest from "./StyleTest";
import { RouterProvider } from "react-router-dom";
import router from "./main-router";
function App() {
  const name = "name";
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
