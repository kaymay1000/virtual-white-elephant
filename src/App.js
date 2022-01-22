import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Main from './components/Main.tsx';
import SetupPage from './pages/SetupPage.tsx';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <Main aProp={'foo'}/>},
    {path: "/setup", element: <SetupPage/>}
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
