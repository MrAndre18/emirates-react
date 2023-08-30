import Info from "../pages/Info/Info";
import Laws from "../pages/Info/pages/Laws/Laws";
import Documents from "../pages/Info/pages/Documents/Documents";
import State from "../pages/Info/pages/State/State";
import FAQ from "../pages/Info/pages/FAQ/FAQ";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import LawsList from "../components/Laws/LawsList/LawsList";

export const appRoutes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <About /> },
  { path: '/info/*', element: <Info /> },
]

export const infoRoutes = [
  { path: 'laws?/*', element: <Laws /> },
  { path: 'documents', element: <Documents /> },
  { path: 'state', element: <State /> },
  { path: 'FAQ', element: <FAQ /> },
]

export const lawsCategoriesRoutes = [
  {
    path: 'real_estate',
    element: <LawsList />,
    children: [
      {
        path: 'rent',
        element: <LawsList />,
        children: [
          { path: 'landlord_rights', element: <LawsList /> },
          { path: 'tenant_rights', element: <LawsList /> },
        ]
      },
      { path: 'purchase', element: <LawsList /> },
      { path: 'sale', element: <LawsList /> },
    ]
  },
  {
    path: 'family_law',
    element: <LawsList />,
  },
  {
    path: 'labor_law',
    element: <LawsList />,
  },
]