import Home from 'components/Home';
import Welcome from 'components/Welcome';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/welcome',
    component: Welcome,
  },
];
