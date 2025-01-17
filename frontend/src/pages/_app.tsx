import { ChakraProvider } from "@chakra-ui/react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
