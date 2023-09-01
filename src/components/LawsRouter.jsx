import { useRoutes } from 'react-router-dom';
import { lawsCategoriesRoutes } from '../router/routes';

const LawsRouter = () => {
  const routes = useRoutes(lawsCategoriesRoutes);

  return routes;
};

export default LawsRouter;