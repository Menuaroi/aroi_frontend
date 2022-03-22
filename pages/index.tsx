import Login from "./user/login";
import Logout from "./user/logout";
import Profile from "./user/profile";

export default function Home() {
  return (
    <>
      <Login />
      <Logout />
      <Profile />
    </>
  );
}
