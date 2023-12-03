import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const mongoose = require('mongoose')
// const URL =
//   'mongodb+srv://quytranquil:101003@admin.vssgzcv.mongodb.net/?retryWrites=true&w=majority'

// const connectDB = async () => {
//   try {
//     await mongoose.connect(URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     console.log('Connected to mongoDB')
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// connectDB()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
