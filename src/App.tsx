import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import loadable from '@loadable/component';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = loadable(
  () => import('./components/Navigation' /* webpackChunkName: "nav"*/),
);
const AboutView = lazy(
  () => import('./views/AboutView' /* webpackChunkName: "about-view"*/),
);
const GlobalView = lazy(
  () => import('./views/GlobalView' /* webpackChunkName: "global-page"*/),
);
const CountryView = lazy(
  () => import('./views/CountryView' /* webpackChunkName: "country-page"*/),
);
const Footer = loadable(
  () => import('./components/Footer' /* webpackChunkName: "footer"*/),
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/global" exact component={GlobalView} />
          <Route path="/countries" exact component={CountryView} />
          <Route path="/about" exact component={AboutView} />
          <Redirect from="/" to="/about" />
        </Switch>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}
