import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavbarUser from './components/userHomepage/userHome/NavbarUser';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import Navbar from './pages/home/Navbar';
import { useRoutes } from './routes';
//import NavbarUser from './components/userHomepage/userHome/NavbarUser';

//import Home from './pages/home/Home';
//import Navbar from './pages/home/Navbar';
//import Signin from './components/signin/Signin';



function App() {
  const { token, login, logout, userId, ready, company } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

   
  if (!ready) {
    return <h1>loading..</h1>
  }
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuthenticated,company }}>
      <BrowserRouter>
     
      {
        isAuthenticated?
        <div>
         <NavbarUser />
         {routes}
         </div>
        :
        <div>
        <Navbar />
        {routes}
        </div>
      }
      
      
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
