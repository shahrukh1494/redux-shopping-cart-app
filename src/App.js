import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
