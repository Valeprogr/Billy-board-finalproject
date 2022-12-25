import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useRoutes } from './routes';

//import Home from './pages/home/Home';
//import Navbar from './pages/home/Navbar';
//import Signin from './components/signin/Signin';



function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  // if (!ready) {
  //   return <h1>loading..</h1>
  // }
  return (
    // <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
    //   <BrowserRouter>
    //     {isAuthenticated}
    //     <div className="App">
    //       {/* <Navbar />
    // <Home /> */}
    //       {/* <Login /> */}
    //       {/* <Signin /> */}
    //       {/* <AdminHome /> */}
    //       {/* <EmployeeHome/> */}
    //       {/* <ProfileUser /> */}
    //       {/* <ProjectsList /> */}
    //     </div>
    //   </BrowserRouter>
    // </AuthContext.Provider>


    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated }}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
