import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Page404 = lazy(() => import("./Page404"));
const Info = lazy(() => import("./Info"));
const Data = lazy(() => import("./Data"));
const Login = lazy(() => import("./Login"));
const Protected = lazy(() => import("./Protected"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/:userId" element={<About />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="info" element={<Info />} />
            <Route path="data" element={<Data />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
