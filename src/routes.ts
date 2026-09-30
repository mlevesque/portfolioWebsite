import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('projects/:projectId', 'pages/ProjectDetails.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;