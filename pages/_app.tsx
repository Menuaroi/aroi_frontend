import "../styles/globals.css";
import { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
