import React from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { lawsCategoriesRoutes } from '../router/routes';
import LawsList from './Laws/LawsList/LawsList';

const LawsRouter = () => {
  const setChildren = list => {
    list.map((item, index) => {
      if (item.children) {
        console.log("🚀 ~ file: LawsRouter.jsx:11 ~ list.map ~ item.children:", item.children)
        setChildren(item.children)
      }
    }
      // <Route
      //   key={index}
      //   path={item.path}
      //   element={<LawsList text={item.path} />}
      // >
      //   {item.children && setChildren(item.children)}
      // </Route>
    )
  }

  let element = useRoutes(lawsCategoriesRoutes);

  return element;

  // return (
  //   <Routes>
  //     {/* {lawsCategoriesRoutes.map((route, index) =>
  //       <Route
  //         key={index}
  //         path={route.path}
  //         element={<LawsList text={route.path} />}
  //       >
  //         {route.children && setChildren(route.children)}
  //       </Route>
  //     )} */}
  //     {setChildren(lawsCategoriesRoutes)}
  //     <Route path="/*" element={<Navigate to='/info/laws' replace />} />
  //   </Routes>
  // );
};

export default LawsRouter;