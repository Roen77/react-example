import { Provider } from "react-redux";
import store from "./store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "./Router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
