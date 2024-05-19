import "../styles/Root.css";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Header/Footer";
import { AuthProvider } from "../globalContext/AuthContext";

function Root() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Root;
