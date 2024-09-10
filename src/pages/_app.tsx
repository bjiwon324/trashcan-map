import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import "@/styles/base/index.scss";
import Gnb from "@/components/commons/Gnb";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ backgroundColor: "gray", height: "100vh" }}>
        <div style={{ width: "390px", margin: "0 auto" }}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
          <Gnb />
        </div>
      </div>
    </QueryClientProvider>
  );
}

//width: "100%", maxWidth: "450px"
