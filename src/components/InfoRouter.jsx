import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { infoRoutes, lawsCategoriesRoutes } from '../router/routes';

const InfoRouter = () => {
  return (
    <Routes>
      {infoRoutes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      )}
      <Route path="/*" element={<Navigate to={`/info/laws/${lawsCategoriesRoutes[0].id}`} replace />} />
    </Routes>
  );
};

export default InfoRouter;