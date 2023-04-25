import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="*" element={<>$04 page</>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
