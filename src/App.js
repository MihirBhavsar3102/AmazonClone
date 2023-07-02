import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operation
      unsubscribe();
    };
  }, []);

  console.log("User is >>>>", user);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          {/*Default Route*/}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
