import React, { useState } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from '@@components/Error/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp(props: any) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <title>Computers App</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <ToastContainer />
          <div>
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
          </div>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

