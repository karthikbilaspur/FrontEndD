// app/routes.tsx
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './routes/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;