import React, { useState } from "react";
import Form from "./components/Form/Form";
import ReportViewer from "./components/ReportViewer/ReportViewer";
import "./styles/global.css";
import API_BASE_URL from "./config";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [reportPages, setReportPages] = useState([]); // Original generated report pages
  const [updatedReportPages, setUpdatedReportPages] = useState([]); // Updated report pages after edits
  const [isEditable, setIsEditable] = useState(true); // Determine if form fields are editable
  const [isFetching, setIsFetching] = useState(false); // Loading state for report generation
  const [error, setError] = useState(""); // Error state

  // Function to handle report generation
  const generateReport = async (formData) => {
    setIsFetching(true); // Show fetching animation
    setError(""); // Reset any previous error
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to generate report");
      }

      const htmlReport = await response.text();
      const pages = htmlReport.split("<!-- PAGE BREAK -->"); // Split report into pages
      setReportPages(pages); // Update the original report pages state
      setUpdatedReportPages([...pages]); // Initialize the updated report pages
      setIsEditable(false); // Disable the form fields
    } catch (error) {
      console.error(error.message);
      setError("Failed to fetch report. Please try again."); // Set error message
    } finally {
      setIsFetching(false); // Hide fetching animation
    }
  };

  return (
    <div className="container">
      {isFetching && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
  
      {/* Form Section */}
      <div className="form-container">
        <Form
          onGenerateReport={generateReport}
          isEditable={isEditable}
          setReportPages={setReportPages}
          setIsEditable={setIsEditable}
          updatedReportPages={updatedReportPages}
        />
      </div>
  
      {/* Report Viewer Section */}
      <div className="report-viewer-container">
        <ReportViewer
          reportPages={reportPages}
          setUpdatedReportPages={setUpdatedReportPages}
        />
      </div>
  
      <SpeedInsights />
    </div>
  );  
}

export default App;