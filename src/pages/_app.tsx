import PageLayout from "@/layout/page";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        Go Travel
      </title>
    </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
