import Main from "../pages/Main";
import About from "../pages/About";
import Info from "../pages/Info";
import Laws from "../pages/Info/Laws";
import Documents from "../pages/Info/Documents";
import State from "../pages/Info/State";
import FAQ from "../pages/Info/FAQ";

export const appRoutes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '/info/*', element: <Info /> },
]

export const infoRoutes = [
  { path: '/laws', element: <Laws /> },
  { path: '/documents', element: <Documents /> },
  { path: '/state', element: <State /> },
  { path: '/FAQ', element: <FAQ /> },
]