import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import MatchTutorsOptimized from "./pages/MatchTutorsOptimized";
import Tutorfilled from "./pages/Tutorfilled";
import DashboadtutorOptimized from "./pages/DashboadtutorOptimized";
import Studentfilled from "./pages/Studentfilled";
import HomePage from "./pages/home";
import { AITest } from "./pages/AITest";
import DashboadStudent from "./pages/DashboardStudent";
import StartSession from "./pages/StartSession";
import { MyNFTs, MyTokens } from "./pages/Covalent";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/match-tutorsoptimized":
        title = "";
        metaDescription = "";
        break;
      case "/header-container":
        title = "";
        metaDescription = "";
        break;
      case "/tutorfilled":
        title = "";
        metaDescription = "";
        break;
      case "/studentfilled":
        title = "";
        metaDescription = "";
        break;
      case "/dashboadtutoroptimized":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<AITest />} />
      <Route path="/matchtutors" element={<MatchTutorsOptimized />} />
      <Route path="/tutorfilled" element={<Tutorfilled />} />
      <Route path="/studentfilled" element={<Studentfilled />} />
      <Route path="/dashboard" element={<DashboadtutorOptimized />} />
      <Route path="/dashboardstudent" element={<DashboadStudent />} />
      <Route path="/session" element={<StartSession/>} />
      <Route path="/mynfts" element={<MyNFTs/>} />
      <Route path="/mytokens" element={<MyTokens/>} />
    </Routes>
  );
}
export default App;
