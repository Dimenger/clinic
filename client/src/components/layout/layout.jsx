import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/auth-provider";

export const Layout = () => {
  return (
    <AuthProvider>
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
};
