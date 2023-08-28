import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { infoRoutes } from '../router/routes';

const AppRouter = () => {
  return (
    <Routes>
      {infoRoutes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      )}
      <Route path="/*" element={<Navigate to="/info/laws" replace />} />
    </Routes>
  );
};

export default AppRouter;