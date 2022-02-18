import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from 'components/Navigation';


const AboutView = lazy(() =>
  import('views/AboutView' /* webpackChunkName: "about-view"*/),
);
const GlobalView = lazy(() =>
  import('views/GlobalView' /* webpackChunkName: "global-page"*/),
);
const CountryView = lazy(() =>
  import(
    'views/CountryView' /* webpackChunkName: "country-page"*/
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
          <Route path="/countries" component={CountryView} />

          <Redirect to="/about" />
        </Switch>
      </Suspense>

    </>
  );
}