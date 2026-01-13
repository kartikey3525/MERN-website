const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-route");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
const PORT = process.env.PORT || 5001;

/* =========================
   CORS CONFIG (LOCAL + PROD)
   ========================= */

   const allowedOrigins = [
     "http://localhost:5173",
     "https://mern-website-demo.netlify.app",
   ];
   
   app.use(
     cors({
       origin: (origin, callback) => {
         if (!origin) return callback(null, true);
   
         if (allowedOrigins.includes(origin)) {
           callback(null, true);
         } else {
           callback(null, false);
         }
       },
       methods: "GET,POST,PUT,DELETE,PATCH",
     })
   );
   

/* =========================
   MIDDLEWARES
   ========================= */

app.use(express.json());

/* =========================
   ROUTES
   ========================= */

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

/* =========================
   ERROR HANDLER
   ========================= */

app.use(errorMiddleware);

/* =========================
   SERVER START
   ========================= */

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
