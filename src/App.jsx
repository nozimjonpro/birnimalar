import "./App.scss";
import AuthenticatedApp from "./AutenticatedApp";
import UnauthenticatedApp from "./UnAuthenticatedApp";
import useToken from "./Hooks/UseToken";

function App() {
  const [token, setToken] = useToken();

  if (token) {
    return <AuthenticatedApp></AuthenticatedApp>;
  } else {
    return <UnauthenticatedApp></UnauthenticatedApp>;
  }
}

export default App;
