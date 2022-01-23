import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Main from './components/Main.tsx';
// import SetupPage from './pages/SetupPage.tsx';
import SetupPageTwo from './pages/SetupPageTwo.tsx';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <Main aProp={'foo'} />},
    // {path: "/setup", element: <SetupPage/>}
    {path: "/setup", element: <SetupPageTwo/>}
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
