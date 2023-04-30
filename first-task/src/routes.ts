import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
import { Form } from './pages/Form/Form';

export interface RouteSchema {
  key: string;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}

export const ROUTES: RouteSchema[] = [
  {
    key: 'about',
    path: '/about',
    component: About,
  },
  {
    key: 'form',
    path: '/form',
    component: Form,
  },
  {
    key: 'main',
    path: '/',
    component: Main,
  },
];
