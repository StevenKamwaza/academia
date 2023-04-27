import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="*"
              element={
                <center className="h-96 max-xl:h-screen  pt-16 bg-gray-400">
                  <p className="text-center my-auto mt-10 text-xl  text-gray-700">
                    <b>Oops! </b>the page cannot be found
                  </p>
                  <code className="text-4xl md:text-5xl mt-4 font-extrabold ">
                    404 Error
                  </code>
                </center>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
