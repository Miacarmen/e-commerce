import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ViewProduct from "./pages/ViewProduct";
import Cart from "./pages/Cart";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <body className="flex flex-col min-h-screen">
          <header>
            <Nav />
          </header>
          <main className="pageRoutes flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ViewProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          {/* <footer className="fixed bottom-0 left-0 w-screen h-52"> */}
          <footer>
            <Footer />
          </footer>
        </body>
      </Router>
    </ApolloProvider>
  );
}

export default App;
