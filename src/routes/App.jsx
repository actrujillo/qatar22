import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Item from "../components/Item";
import Layout from "../components/Layout";
import "../assets/css/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/item/:id" element={<Item />} />
            </Routes>
          </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
