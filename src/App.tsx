import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ProductsPage from "./pages/ProductsPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ProductsPage />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
