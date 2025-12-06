import './App.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import NotFound from './components/NotFound';

// Import nested dashboard pages
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      { path: "courses", element: <Courses /> },
      { path: "mocktest", element: <MockTest /> },
      { path: "reports", element: <Reports /> }
    ]
  },
  {
    path: "/student/:id",
    element: (
      <>
        <Navbar />
        <ParamComp/>
      </>
    )
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
