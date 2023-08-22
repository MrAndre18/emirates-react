import Main from "../pages/Main";
import About from "../pages/About";
import Info from "../pages/Info";

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '/info', element: <Info /> },
]