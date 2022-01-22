import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Main from './components/Main.tsx';
import Test from './components/Test.tsx';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <Main aProp={'foo'}/>},
    {path: "/test", element: <Test testProp={'bar'}/>}
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
