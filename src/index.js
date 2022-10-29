import React from "react";
import reportWebVitals from "./reportWebVitals";
import App from "./components/pages/app/App";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// root.render(
//   <React.StrictMode>
//     <HashRouter basename="/">
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductPage />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </HashRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
