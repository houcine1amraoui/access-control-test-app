import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={async () => await loginWithRedirect()}>Login</button>
    </div>
  );
};

export default HomePage;
