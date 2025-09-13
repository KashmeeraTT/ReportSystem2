const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Meteorology = require("./models/Meteorology");
const { text } = require("body-parser");

// Connect to MongoDB
mongoose.connect("mongodb+srv://tishan21:FLx4dDbJYtVEJwRz@cluster0.axnh0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Function to read a text file and return its content
const readTextFile = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, "utf-8"); // Read the file in UTF-8 format
        return content; // Return the text content
    } catch (error) {
        console.error("Error reading the file:", error);
        throw error;
    }
};

// Function to read a PNG file and convert it to Buffer
const readImage = (imagePath) => {
    return fs.readFileSync(imagePath);
};

// Function to read a CSV file and convert it to binary
const readCsvAsBinary = (csvPath) => {
    return fs.readFileSync(csvPath); // Reads the file as a Buffer without encoding
};

// Sample Data
const meteorologyData = [
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Seasonal",
        month: "November",
        year: 2024,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Seasonal-and-Monthly-Data.csv")), // Store CSV as binary
            png2: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Seasonal.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "November",
        submonth: "November",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Monthly1.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "November",
        submonth: "December",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Monthly2.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "November",
        submonth: "January",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Monthly3.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 45,
        subweekNumber: 0,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Weekly-Data.csv")), // Store CSV as binary
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 45,
        subweekNumber: 1,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Weekly1.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 45,
        subweekNumber: 2,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Weekly2.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 45,
        subweekNumber: 3,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Weekly3.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 45,
        subweekNumber: 4,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Rainfall-Forecast-Weekly4.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Recieved",
        month: "October",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-00-DoM-Observed-Rainfall-Anomaly-Data.csv")), // Store CSV as binary
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-11-00-DoM-Received-Monthly-Rainfall.png')),
            png2: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-11-00-DoM-Observed-Percent-of-Normal-Precipitation.png')),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Climatological",
        month: "November",
        year: 2024,
        district: "Vavuniya",
        content: {
            text: readTextFile(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-11-00-DoA-Agromet-Advisory-Summary.txt')),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Major",
        day: 7,
        month: "November",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-07-ID-Reservoir-Water-Availability-Data-Major.csv")),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Medium",
        day: 7,
        month: "November",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-07-ID-Reservoir-Water-Availability-Data-Medium.csv")),
            csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-07-PID-Reservoir-Water-Availability-Data-Medium.csv")),
        },
    },
    {
        department: "DAD",
        category: "Reservoir",
        subcategory: "Minor",
        day: 7,
        month: "November",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-11-07-DAD-Reservoir-Water-Availability-Data-Small.csv")),
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-11-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
        },
    },
    // Add other data here in similar fashion, using `readImage` for png1, png2, and png3
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Seasonal",
        month: "December",
        year: 2024,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Seasonal-and-Monthly-Data.csv")), // Store CSV as binary
            png2: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Seasonal.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "December",
        submonth: "December",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Monthly1.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "December",
        submonth: "January",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Monthly2.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "December",
        submonth: "February",
        year: 2024,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Monthly3.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 49,
        subweekNumber: 0,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Weekly-Data.csv")), // Store CSV as binary
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 49,
        subweekNumber: 1,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Weekly1.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 49,
        subweekNumber: 2,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Weekly2.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 49,
        subweekNumber: 3,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Weekly3.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2024,
        weekNumber: 49,
        subweekNumber: 4,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Rainfall-Forecast-Weekly4.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Recieved",
        month: "November",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-00-DoM-Observed-Rainfall-Anomaly-Data.csv")), // Store CSV as binary
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DoM-Received-Monthly-Rainfall.png')),
            png2: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DoM-Observed-Percent-of-Normal-Precipitation.png')),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Climatological",
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            text: readTextFile(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DoA-Agromet-Advisory-Summary.txt')),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Major",
        day: 3,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-03-ID-Reservoir-Water-Availability-Data-Major.csv")),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Medium",
        day: 3,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-03-ID-Reservoir-Water-Availability-Data-Medium.csv")),
            csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-03-PID-Reservoir-Water-Availability-Data-Medium.csv")),
        },
    },
    {
        department: "DAD",
        category: "Reservoir",
        subcategory: "Minor",
        day: 3,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-03-DAD-Reservoir-Water-Availability-Data-Small.csv")),
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
        },
    },
    // Add other data here in similar fashion, using `readImage` for png1, png2, and png3
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Major",
        day: 5,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-ID-Reservoir-Water-Availability-Data-Major.csv")),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Medium",
        day: 5,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-ID-Reservoir-Water-Availability-Data-Medium.csv")),
            csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-PID-Reservoir-Water-Availability-Data-Medium.csv")),
        },
    },
    {
        department: "DAD",
        category: "Reservoir",
        subcategory: "Minor",
        day: 5,
        month: "December",
        year: 2024,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-DAD-Reservoir-Water-Availability-Data-ASC.csv")),
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
        },
    },
    // {
    //     department: "DOA",
    //     category: "Parameters",
    //     month: "December",
    //     year: 2024,
    //     district: "Vavuniya",
    //     content: {
    //         text: readTextFile(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DoA-Agromet-Parameter-Selection.txt')),
    //     },
    // },

    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Seasonal",
        month: "April",
        year: 2025,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Seasonal-and-Monthly-Data.csv")), // Store CSV as binary
            png2: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Seasonal.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "April",
        submonth: "April",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Monthly1.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "April",
        submonth: "May",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Monthly2.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "April",
        submonth: "June",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Monthly3.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2025,
        weekNumber: 14,
        subweekNumber: 0,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Weekly-Data.csv")), // Store CSV as binary
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2025,
        weekNumber: 14,
        subweekNumber: 1,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Weekly1.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2025,
        weekNumber: 14,
        subweekNumber: 2,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Weekly2.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2025,
        weekNumber: 14,
        subweekNumber: 3,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Weekly3.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Vavuniya",
        year: 2025,
        weekNumber: 14,
        subweekNumber: 4,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Rainfall-Forecast-Weekly4.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Recieved",
        month: "March",
        year: 2025,
        district: "Vavuniya",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-00-DoM-Observed-Rainfall-Anomaly-Data.csv")), // Store CSV as binary
            png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for April 2025', '2025-04-00-DoM-Received-Monthly-Rainfall.png')),
            png2: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for April 2025', '2025-04-00-DoM-Observed-Percent-of-Normal-Precipitation.png')),
        },
    },
    // {
    //     department: "DoM",
    //     category: "Rainfall",
    //     subcategory: "Climatological",
    //     month: "April",
    //     year: 2025,
    //     district: "Vavuniya",
    //     content: {
    //         text: readTextFile(path.join(__dirname, 'dbAssets/AgroMet Data for April 2025', '2025-04-00-DoA-Agromet-Advisory-Summary.txt')),
    //     },
    // },
    // {
    //     department: "ID",
    //     category: "Reservoir",
    //     subcategory: "Major",
    //     day: 1,
    //     month: "April",
    //     year: 2025,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-01-ID-Reservoir-Water-Availability-Data-Major.csv")),
    //     },
    // },
    // {
    //     department: "ID",
    //     category: "Reservoir",
    //     subcategory: "Medium",
    //     day: 1,
    //     month: "April",
    //     year: 2025,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-01-ID-Reservoir-Water-Availability-Data-Medium.csv")),
    //         csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-01-PID-Reservoir-Water-Availability-Data-Medium.csv")),
    //     },
    // },
    // {
    //     department: "DAD",
    //     category: "Reservoir",
    //     subcategory: "Minor",
    //     day: 1,
    //     month: "April",
    //     year: 2025,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for April 2025", "2025-04-01-DAD-Reservoir-Water-Availability-Data-Small.csv")),
    //         png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for April 2025', '2025-04-01-DAD-Water-Availability-Forecast-Minor-Tank.png')),
    //     },
    // },

    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Seasonal",
        month: "August",
        year: 2025,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Seasonal-and-Monthly-Data.csv")), // Store CSV as binary
            png2: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Seasonal.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "August",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Monthly1.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "September",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Monthly2.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "October",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Monthly3.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Puttalam",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 0,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Weekly-Data.csv")), // Store CSV as binary
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Puttalam",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 1,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Weekly1.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Puttalam",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 2,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Weekly2.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Puttalam",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 3,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Weekly3.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Puttalam",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 4,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Rainfall-Forecast-Weekly4.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Recieved",
        month: "July",
        year: 2025,
        district: "Puttalam",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-00-DoM-Observed-Rainfall-Anomaly-Data.csv")), // Store CSV as binary
            png1: readImage(path.join(__dirname, 'dbAssets/PUT', '2025-08-00-DoM-Received-Monthly-Rainfall.png')),
            png2: readImage(path.join(__dirname, 'dbAssets/PUT', '2025-08-00-DoM-Observed-Percent-of-Normal-Precipitation.png')),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Climatological",
        month: "August",
        year: 2025,
        district: "Puttalam",
        content: {
            text: readTextFile(path.join(__dirname, 'dbAssets/PUT', '2025-08-00-DoA-Agromet-Advisory-Summary.txt')),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Major",
        day: 31,
        month: "August",
        year: 2025,
        district: "Puttalam",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-31-ID-Reservoir-Water-Availability-Data-Major.csv")),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Medium",
        day: 31,
        month: "August",
        year: 2025,
        district: "Puttalam",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-31-ID-Reservoir-Water-Availability-Data-Medium.csv")),
            //csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-31-PID-Reservoir-Water-Availability-Data-Medium.csv")),
        },
    },
    {
        department: "DAD",
        category: "Reservoir",
        subcategory: "Minor",
        day: 31,
        month: "August",
        year: 2025,
        district: "Puttalam",
        content: {
            //csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/PUT", "2025-08-31-DAD-Reservoir-Water-Availability-Data-Small.csv")),
            png1: readImage(path.join(__dirname, 'dbAssets/PUT', '2025-08-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
        },
    },
    // {
    //     department: "DOA",
    //     category: "Parameters",
    //     month: "August",
    //     year: 2025,
    //     district: "Puttalam",
    //     content: {
    //         text: readTextFile(path.join(__dirname, 'dbAssets/PUT', '2025-08-00-DoA-Agromet-Parameter-Selection.txt')),
    //     },
    // },
    // // Add other data here in similar fashion, using `readImage` for png1, png2, and png3
    // {
    //     department: "ID",
    //     category: "Reservoir",
    //     subcategory: "Major",
    //     day: 5,
    //     month: "December",
    //     year: 2024,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-ID-Reservoir-Water-Availability-Data-Major.csv")),
    //     },
    // },
    // {
    //     department: "ID",
    //     category: "Reservoir",
    //     subcategory: "Medium",
    //     day: 5,
    //     month: "December",
    //     year: 2024,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-ID-Reservoir-Water-Availability-Data-Medium.csv")),
    //         csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-PID-Reservoir-Water-Availability-Data-Medium.csv")),
    //     },
    // },
    // {
    //     department: "DAD",
    //     category: "Reservoir",
    //     subcategory: "Minor",
    //     day: 5,
    //     month: "December",
    //     year: 2024,
    //     district: "Vavuniya",
    //     content: {
    //         csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/AgroMet Data for Vavuniya", "2024-12-05-DAD-Reservoir-Water-Availability-Data-ASC.csv")),
    //         png1: readImage(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
    //     },
    // },
    // {
    //     department: "DOA",
    //     category: "Parameters",
    //     month: "December",
    //     year: 2024,
    //     district: "Vavuniya",
    //     content: {
    //         text: readTextFile(path.join(__dirname, 'dbAssets/AgroMet Data for Vavuniya', '2024-12-00-DoA-Agromet-Parameter-Selection.txt')),
    //     },
    // },

        {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Seasonal",
        month: "August",
        year: 2025,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Seasonal-and-Monthly-Data.csv")), // Store CSV as binary
            png2: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Seasonal.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "August",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Monthly1.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "September",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Monthly2.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Monthly",
        month: "August",
        submonth: "October",
        year: 2025,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Monthly3.png")), // Store image as Buffer
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Kurunegala",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 0,
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Weekly-Data.csv")), // Store CSV as binary
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Kurunegala",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 1,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Weekly1.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Kurunegala",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 2,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Weekly2.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Kurunegala",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 3,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Weekly3.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Weekly",
        district: "Kurunegala",
        year: 2025,
        weekNumber: 35,
        subweekNumber: 4,
        content: {
            png1: readImage(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Rainfall-Forecast-Weekly4.png")),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Recieved",
        month: "July",
        year: 2025,
        district: "Kurunegala",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-00-DoM-Observed-Rainfall-Anomaly-Data.csv")), // Store CSV as binary
            png1: readImage(path.join(__dirname, 'dbAssets/KUR', '2025-08-00-DoM-Received-Monthly-Rainfall.png')),
            png2: readImage(path.join(__dirname, 'dbAssets/KUR', '2025-08-00-DoM-Observed-Percent-of-Normal-Precipitation.png')),
        },
    },
    {
        department: "DoM",
        category: "Rainfall",
        subcategory: "Climatological",
        month: "August",
        year: 2025,
        district: "Kurunegala",
        content: {
            text: readTextFile(path.join(__dirname, 'dbAssets/KUR', '2025-08-00-DoA-Agromet-Advisory-Summary.txt')),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Major",
        day: 31,
        month: "August",
        year: 2025,
        district: "Kurunegala",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-31-ID-Reservoir-Water-Availability-Data-Major.csv")),
        },
    },
    {
        department: "ID",
        category: "Reservoir",
        subcategory: "Medium",
        day: 31,
        month: "August",
        year: 2025,
        district: "Kurunegala",
        content: {
            csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-31-ID-Reservoir-Water-Availability-Data-Medium.csv")),
            //csv2: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-31-PID-Reservoir-Water-Availability-Data-Medium.csv")),
        },
    },
    {
        department: "DAD",
        category: "Reservoir",
        subcategory: "Minor",
        day: 31,
        month: "August",
        year: 2025,
        district: "Kurunegala",
        content: {
            //csv1: readCsvAsBinary(path.join(__dirname, "dbAssets/KUR", "2025-08-31-DAD-Reservoir-Water-Availability-Data-Small.csv")),
            png1: readImage(path.join(__dirname, 'dbAssets/KUR', '2025-08-00-DAD-Water-Availability-Forecast-Minor-Tank.png')),
        },
    },
    // {
    //     department: "DOA",
    //     category: "Parameters",
    //     month: "August",
    //     year: 2025,
    //     district: "Kurunegala",
    //     content: {
    //         text: readTextFile(path.join(__dirname, 'dbAssets/KUR', '2025-08-00-DoA-Agromet-Parameter-Selection.txt')),
    //     },
    // },
];

// Function to populate the database
async function populateData() {
    try {
        await Meteorology.deleteMany(); // Clear any existing data
        await Meteorology.insertMany(meteorologyData); // Insert new data
        console.log("Database populated successfully!");
        mongoose.connection.close(); // Close connection after populating
    } catch (error) {
        console.error("Error populating database:", error);
    }
}

populateData();
