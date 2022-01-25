import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Main from './components/Main.tsx';
import SetupPage from './pages/SetupPage.tsx';
// import SetupPageTemp from './pages/SetupPageTemp';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <Main aProp={'foo'} />},
    {path: "/setup", element: <SetupPage/>}
    // {path: "/setup", element: <SetupPageTemp/>}
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App className="h-screen">
        {/* <Nav></Nav> */}
        {/* {children} */}
        {/* <Footer></Footer> */}
      </App>
    </Router>
  )
}

export default AppWrapper;
