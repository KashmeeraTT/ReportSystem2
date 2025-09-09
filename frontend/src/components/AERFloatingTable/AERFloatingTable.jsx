import React, { useState, useEffect } from "react";
import "./AERFloatingTable.css";

const districtAERCodes = {
  Vavuniya: ["DL1b", "DL1e", "DL1f"],
  Anuradhapura: ["DL2a", "DL2b", "DL2c"],
  Ampara: ["DL3a", "DL3b", "DL3c"],
  Kurunegala: ["IL1a", "DL1b", "IL3", "IL1b", "IL1a"],
  Puttalam: ["DL3", "DL1b", "IL1b", "IL1a"],
  Trincomalee: ["DL6a", "DL6b", "DL6c"],
};

const translations = {
  en: {
    title: "Agromet Parameter Selection",
    paramHeader: "Agro-met Parameter",
    forecast: "Seasonal Rainfall Forecast",
    received: "Received Rainfall Last Month",
    mtwa: (r1, r2) => `Minor Tank Water Availability ${r1}%-${r2}%`,
    yes: "Yes",
    open: "📋 Fill AER Table",
    close: "✖ Close AER Table",
    saved: "✅ AER Table Saved",
    saveBtn: "Save Table as Report Page",
    savedBtn: "✔ Saved",
    options: ["Below Normal", "Near Normal", "Above Normal"],
  },
  si: {
    title: "කෘෂි-කාලගුණ පරාමිතීන් තේරීම",
    paramHeader: "කෘෂි-කාලගුණ පරාමිතිය",
    forecast: "මාසික වර්ෂාපතන අනාවැකි",
    received: "පසුගිය මාසේ ලැබුණු වර්ෂාව",
    mtwa: (r1, r2) => `කුඩා ටැංකි ජලය ${r1}%-${r2}%`,
    yes: "ඔව්",
    open: "📋 AER වගුව පුරවන්න",
    close: "✖ වසන්න",
    saved: "✅ AER වගුව සුරකින ලදී",
    saveBtn: "වාර්තාවට AER වගුව එකතු කරන්න",
    savedBtn: "✔ සුරකින ලදී",
    options: ["සාමාන්‍යයට අඩු", "සාමාන්‍ය", "සාමාන්‍යයට වැඩි"],
  },
  ta: {
    title: "வானிலை விவசாய ஆலோசனை அளவுருக்கள்",
    paramHeader: "வானிலை விவசாய அளவுரு",
    forecast: "முகாமை கால மழை முன்கூட்டிய கணிப்பு",
    received: "கடந்த மாதத்தில் பெற்ற மழை",
    mtwa: (r1, r2) => `சிறிய தடாகங்களில் நீர் கிடைப்புத்தன்மை ${r1}%-${r2}%`,
    yes: "ஆம்",
    open: "📋 AER அட்டவணையை நிரப்புக",
    close: "✖ மூடு",
    saved: "✅ AER அட்டவணை சேமிக்கப்பட்டது",
    saveBtn: "அறிக்கைக்கு AER அட்டவணை சேர்க்க",
    savedBtn: "✔ சேமிக்கப்பட்டது",
    options: ["சாதாரணத்திற்கு குறைவானது", "சாதாரணம்", "சாதாரணத்திற்கு மேல்"],
  },
};

const AERFloatingTable = ({ onSave, district, language = "en", resetSignal  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [aerCodes, setAerCodes] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const t = translations[language] || translations.en;

  useEffect(() => {
    if (district && districtAERCodes[district]) {
      setAerCodes(districtAERCodes[district]);
    } else {
      setAerCodes([]);
    }
  }, [district]);

  // Reset form when language changes
  useEffect(() => {
    setFormValues({});
    setIsSaved(false);
    setIsOpen(false);
  }, [language, resetSignal]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleRadioChange = (code, rangeNum) => {
    const updated = { ...formValues };
    for (let i = 1; i <= 5; i++) {
      delete updated[`AER-${code}-range${i}`];
    }
    updated[`AER-${code}-range${rangeNum}`] = true;
    setFormValues(updated);
    setIsSaved(false);
  };

  const handleSave = () => {
    if (!isSaved) {
      const htmlPage = generateStaticHTML(formValues);
      onSave(htmlPage);
      setIsSaved(true);
      setIsOpen(false);
    }
  };

  const generateStaticHTML = (values) => {
    const row = (label, getValue) => `
      <tr>
        <td>${label}</td>
        ${aerCodes.map((code) => `<td>${getValue(code)}</td>`).join("")}
      </tr>
    `;

    const radioRow = (label, rangeNum) =>
      row(label, (code) =>
        values[`AER-${code}-range${rangeNum}`] ? t.yes : ""
      );

    return `
      <!DOCTYPE html>
      <html lang="${language}">
      <head>
        <meta charset="UTF-8">
        <title>${t.title}</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 40px;
            background: #f8f9fa;
          }
          .section {
            page-break-after: always;
          }
          h2 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            box-shadow: 0 0 12px rgba(0,0,0,0.08);
            border-radius: 8px;
            overflow: hidden;
          }
          th {
            background: linear-gradient(to right,rgb(170, 221, 255),rgb(208, 226, 233));
            color: #000;
            padding: 12px;
            text-align: center;
            font-size: 15px;
          }
          td {
            padding: 10px;
            text-align: center;
            border: 1px solid #dee2e6;
            font-size: 14px;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          tr:hover td {
            background-color: #e9f7fe;
          }
        </style>
      </head>
      <body>
        <div class="section">
          <h2>${t.title}</h2>
          <table>
            <thead>
              <tr>
                <th>${t.paramHeader}</th>
                ${aerCodes.map((code) => `<th>${code}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${row(t.forecast, (c) => values[`SRF-${c}`] || "N/A")}
              ${row(t.received, (c) => values[`RRF-${c}`] || "N/A")}
              ${radioRow(t.mtwa(0, 30), 1)}
              ${radioRow(t.mtwa(31, 50), 2)}
              ${radioRow(t.mtwa(51, 70), 3)}
              ${radioRow(t.mtwa(71, 90), 4)}
              ${radioRow(t.mtwa(91, 100), 5)}
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="aer-floating-wrapper" style={{ position: "fixed", top: "20px", right: "20px", zIndex: 999 }}>
      <button className="floating-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? t.close : t.open}
      </button>

      {isSaved && (
        <div style={{ marginTop: "8px", color: "green", fontWeight: "bold" }}>
          {t.saved}
        </div>
      )}

      {isOpen && (
        <div className="aer-table-window">
          <h3 style={{ marginTop: 0 }}>{t.title}</h3>
          <table className="aer-table">
            <thead>
              <tr>
                <th>{t.paramHeader}</th>
                {aerCodes.map((code) => (
                  <th key={code}>{code}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["SRF", "RRF"].map((key) => (
                <tr key={key}>
                  <td>{key === "SRF" ? t.forecast : t.received}</td>
                  {aerCodes.map((code) => (
                    <td key={code}>
                      <select
                        name={`${key}-${code}`}
                        value={formValues[`${key}-${code}`] || ""}
                        onChange={handleSelectChange}
                      >
                        <option value="">--</option>
                        {t.options.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </td>
                  ))}
                </tr>
              ))}
              {[1, 2, 3, 4, 5].map((range) => (
                <tr key={range}>
                  <td>{t.mtwa(range * 20 - 20, range * 20)}</td>
                  {aerCodes.map((code) => (
                    <td key={code}>
                      <input
                        type="radio"
                        name={`AER-${code}`}
                        checked={!!formValues[`AER-${code}-range${range}`]}
                        onChange={() => handleRadioChange(code, range)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button className="save-aer-button" onClick={handleSave} disabled={isSaved}>
            {isSaved ? t.savedBtn : t.saveBtn}
          </button>
        </div>
      )}
    </div>
  );
};

export default AERFloatingTable;
