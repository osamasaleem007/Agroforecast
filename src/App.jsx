import { SignedIn, SignedOut } from "@clerk/clerk-react";
import WelcomePage from "./Pages/WelcomePage";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./Pages/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SignedOut>
                  <WelcomePage />
                </SignedOut>
                <SignedIn>
                  <Home />
                </SignedIn>
              </>
            }
          />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
