import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import UserTable from "./components/User/UserTable";
import { Container } from "semantic-ui-react";
import { useEffect } from "react";
import { setupErrorHandlingInterceptor } from "./interceptor/axiosinterceptor";

function App() {
  const location = useLocation();

  useEffect(() => {
    setupErrorHandlingInterceptor();
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <UserTable />
      ) : (
        <Container className="container-style">
          <Outlet />
        </Container>
      )}
    </>
  );
}

export default App;
