import { useAuth } from "../context/AuthContext";
import { LogIn, LogOut } from "lucide-react";

export default function LoginButton() {
  const { user, login, logout } = useAuth();

  return (
    <button
      onClick={user ? logout : login}
      className="fixed top-4 left-4 bg-gray-200 dark:bg-gray-800 text-sm px-3 py-1 rounded flex items-center gap-1"
    >
      {user ? (
        <>
          <LogOut size={16} />
          Logout
        </>
      ) : (
        <>
          {" "}
          <LogIn size={16} />
          Login
        </>
      )}
    </button>
  );
}
