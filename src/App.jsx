// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { store } from "./store";                 // ← import your store

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Page-level components
import Homepage from "./pages/Homepage/Homepage";
import NewIn from "./pages/NewIn/NewIn";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Accessories from "./pages/Accessories/Accessories";
import Sale from "./pages/Sale/Sale";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>                      {/* ← provide the store */}
      <Router>
        <div className="font-roboto text-gray-900 min-h-screen flex flex-col">
          <Header />

          {/* Page content */}
          <main className="flex-grow">
            <Routes>
              {/* Redirect root to /home */}
              <Route path="/" element={<Navigate to="/home" replace />} />

              {/* Primary site pages */}
              <Route path="/home" element={<Homepage />} />
              <Route path="/new-in" element={<NewIn />} />
              <Route path="/women" element={<Women />} />
              <Route path="/men" element={<Men />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/sale" element={<Sale />} />

              {/* Fallback for unmatched routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
