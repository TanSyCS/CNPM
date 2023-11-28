import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const TlchinstepTwo = React.lazy(() => import("pages/TlchinstepTwo"));
const TlchinstepOne = React.lazy(() => import("pages/TlchinstepOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tlchinstepone" element={<TlchinstepOne />} />
          <Route path="/tlchinsteptwo" element={<TlchinstepTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
