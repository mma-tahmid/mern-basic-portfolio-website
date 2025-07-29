
// require("dotenv").config();


//  const navbarApis = require("./src/routes/navbarApi")


// const express = require("express");

// // object Creation of express

// const app = new express();
// const bodyParser = require("body-parser");


// // 2. Security Middleware IMPORT (Security related packages) 

// const rateLimit = require("express-rate-limit")
// const helmet = require('helmet')
// const mongoSanitize = require("express-mongo-sanitize")
// const cors = require("cors")

// // 3. DataBase Lib Import
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");



// // 4. Security Middleware IMPLEMENT (Security related packages)

// app.use(cors());

// //app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// // app.use(mongoSanitize())

// app.use(cookieParser());

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }))
// app.use(mongoSanitize())



// // 5. body parsar Implement    
// app.use(bodyParser.json());



// // 6. Request Rate Limiting

// const limiter = rateLimit({

//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)

// })

// app.use(limiter);


// let OPTION = { autoIndex: true };



// // mongoose.connect(process.env.DATABASE_URI, OPTION)
// //     .then((res) => {
// //         console.log("MongoDB Connected Successfully")    
// //     })

// //     .catch((error) => {
// //         console.log(error)

// //     })

// const connectDB = async () => {
//     try {
//         const res = await mongoose.connect(process.env.DATABASE_URI, OPTION);
//         console.log("MongoDB Connected Successfully");
//     } catch (error) {
//         console.error("MongoDB Connection Failed", error);
//     }
// };

// connectDB();


// // 9. Backend Routing Implement

// //app.use("/api/v1", router) // base url api (api/v1)



//  const baseUrl = process.env.BASE_URL

//  app.use(`${baseUrl}/`, navbarApis); // .env ar kono kiso path ar modddhe set korte hore aivabe set korte hobe
// // app.use(`${baseUrl}/tasks`, tasksApi);




// //undefined Route
// app.use((req, res, next) => {
//     res.status(404).json({
//         status: "fail",
//         message: `Route ${req.originalUrl} not found`,
//     });
// });
// // app.use("*", (req, res) => {
// //     res.status(404).json({
// //         "status": "Fail",
// //         "data": "Not FOUND"
// //     })
// // })

// module.exports = app; 


// Neww 

require("dotenv").config();
const express = require("express");
const app = express(); // Changed from 'new express()' to standard express()
const bodyParser = require("body-parser");

// Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Database connection options
const OPTION = { autoIndex: true };

// Security Middleware Implementation
app.use(cors());

// Modified helmet configuration
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Body parsers before sanitization
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Modified mongoSanitize implementation
app.use(
    mongoSanitize({
        replaceWith: '_',
        onSanitize: ({ req, key }) => {
            console.warn(`[SANITIZE] Replaced ${key} in request`);
        },
    })
);

app.use(cookieParser());
app.use(bodyParser.json());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, OPTION);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
        process.exit(1); // Exit process on connection failure
    }
};
connectDB();

// Routes
const navbarApis = require("./src/routes/navbarApi");
const baseUrl = process.env.BASE_URL || "/api/v1"; // Default fallback
app.use(`${baseUrl}/navbar`, navbarApis);

// Error handling
app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: `Route ${req.originalUrl} not found`,
    });
});

module.exports = app;