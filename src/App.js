import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';


const AboutView = lazy(() =>
  import('./views/AboutView/AboutViews' /* webpackChunkName: "about-view"*/),
);
const GlobalView = lazy(() =>
  import('./views/GlobalView/GlobalView' /* webpackChunkName: "global-page"*/),
);
const CountriesView = lazy(() =>
  import(
    './views/CountriesView/CountriesView' /* webpackChunkName: "countries-page"*/
  ),
);

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/about" exact component={AboutView} />
          <Route path="/global" exact component={GlobalView} />
          <Route path="/countries" component={CountriesView} />

          <Redirect to="/about" />
        </Switch>
      </Suspense>

    </>
  );
}