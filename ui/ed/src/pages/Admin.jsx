import { useNavigate } from "react-router-dom";

function Admin({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);   // clear login state
    navigate("/login");          // redirect to login page
  };

  return (
    <div>
      <h1>Welcome to the Admin Panel 🚀</h1>
      <p>Only visible after login.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Admin;
