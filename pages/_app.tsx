import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Container from "../components/Container";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import { TeamInProgressContextProvider } from "../context/TeamInProgressContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamInProgressContextProvider>
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </TeamInProgressContextProvider>
  );
}
export default MyApp;
