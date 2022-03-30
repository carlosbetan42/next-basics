import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element; // ReactElement // ReactNode
};

type AppsPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppsPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

// return (<>
//   <Component {...pageProps} />
// </>);
