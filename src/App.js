import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import PlayerOrderPage from './pages/PlayerOrderPage';
import ExchangePage from './pages/ExchangePage';
import ResultsPage from './pages/ResultsPage';
import HowToPlayPage from './pages/HowToPlayPage';
import AboutDevPage from './pages/AboutDevPage';
// import SetupPageTemp from './pages/SetupPageTemp';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <HomePage/>},
    {path: "/main", element: <Main aProp={'foo'} />},
    {path: "/setup", element: <SetupPage/>},
    // {path: "/setup", element: <SetupPageTemp/>}
    {path: "/player-order", element: <PlayerOrderPage/>},
    {path: "/exchange", element: <ExchangePage/>},
    {path: "/results", element: <ResultsPage/>},
    {path: "/how-to-play", element: <HowToPlayPage/>},
    {path: "/about-the-developer", element: <AboutDevPage/>}

  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App className="h-screen"/>
    </Router>
  )
}

export default AppWrapper;
