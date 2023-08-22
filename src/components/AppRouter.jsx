import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../router/routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) =>
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      )}
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;