import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  console.log("fajegoj");
  return (
    <UserContextProvider>
      <h1> 08 project mini context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
