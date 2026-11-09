import { type ReactNode } from 'react';
import { Redirect, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Layout } from '@/components/site/Layout';
import Home from '@/pages/home';
import Training from '@/pages/training';
import About from '@/pages/about';
import KindWords from '@/pages/kind-words';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Layout>
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/training" component={Training} />
          <Route path="/about" component={About} />
          <Route path="/kind-words" component={KindWords} />
          <Route path="/contact" component={Contact} />
          {/* Old proteafitness.com paths, in case a redirect keeps the path. */}
          <Route path="/whatido"><Redirect to="/training" replace /></Route>
          <Route path="/happyclients"><Redirect to="/kind-words" replace /></Route>
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </Layout>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
