import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Contact from "../pages/contact/page";
import Testimonials from "../pages/testimonials/page";
import Services from "../pages/services/page";
import Gallery from "../pages/gallery/page";
import AdolescentGynaecology from "../pages/adolescent-gynaecology/page";
import PrePregnancy from "../pages/pre-pregnancy/page";
import PregnancyCare from "../pages/pregnancy-care/page";
import GynaecologicalExpertise from "../pages/gynaecological-expertise/page";
import MinimalInvasiveSurgery from "../pages/minimal-invasive-surgery/page";
import PreventiveHealth from "../pages/preventive-health/page";
import Vaccinations from "../pages/vaccinations/page";
import MenopauseCare from "../pages/menopause-care/page";
import FertilityCare from "../pages/fertility-care/page";
import FamilyPlanning from "../pages/family-planning/page";
import LaparoscopicSurgery from "../pages/laparoscopic-surgery/page";
import HysteroscopicSurgery from "../pages/hysteroscopic-surgery/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/adolescent-gynaecology",
    element: <AdolescentGynaecology />,
  },
  {
    path: "/services/pre-pregnancy-checkup",
    element: <PrePregnancy />,
  },
  {
    path: "/services/pregnancy-care",
    element: <PregnancyCare />,
  },
  {
    path: "/services/gynaecological-expertise",
    element: <GynaecologicalExpertise />,
  },
  {
    path: "/services/minimal-invasive-surgery",
    element: <MinimalInvasiveSurgery />,
  },
  {
    path: "/services/preventive-health-screening",
    element: <PreventiveHealth />,
  },
  {
    path: "/services/vaccinations",
    element: <Vaccinations />,
  },
  {
    path: "/services/menopause-care",
    element: <MenopauseCare />,
  },
  {
    path: "/services/fertility-care",
    element: <FertilityCare />,
  },
  {
    path: "/services/family-planning",
    element: <FamilyPlanning />,
  },
  {
    path: "/services/laparoscopic-surgery",
    element: <LaparoscopicSurgery />,
  },
  {
    path: "/services/hysteroscopic-surgery",
    element: <HysteroscopicSurgery />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
