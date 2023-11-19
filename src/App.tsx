import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/page";
import Navbar from "./components/Navbar";
import Track from "./pages/track/page";
import Login from "./pages/login/page";
import Order from "./pages/order-page/order/page";
import History from "./pages/order-page/history-order/page";
import Header from "./pages/order-page/header";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const ProtectedRoute = () => {
  // const token = Cookies.get("access_token");

  // if (!token) {
  // return <Navigate to="/login" replace />;
  // }

  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Dummy title={"Not Found"} />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <Navbar active={0}>
              <Dashboard />
            </Navbar>
          }
        />
        <Route path="/order">
          <Route
            path=""
            element={
              <Navbar active={1}>
                <Header>
                  <Order />
                </Header>
              </Navbar>
            }
          />
          <Route
            path="history"
            element={
              <Navbar active={1}>
                <Header>
                  <History />
                </Header>
              </Navbar>
            }
          />
        </Route>
        <Route
          path="/track"
          element={
            <Navbar active={2}>
              <Track />
            </Navbar>
          }
        />
        <Route
          path="/driver"
          element={
            <Navbar active={3}>
              <Dummy title={"List Driver"} />
            </Navbar>
          }
        />
        <Route
          path="/profile"
          element={
            <Navbar active={4}>
              <Dummy title={"Profile"} />
            </Navbar>
          }
        />
      </Route>
    </Routes>
  );
}

function Dummy({ title }: { title: string }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {title}
    </div>
  );
}

export default App;
