import React, { useState } from "react";
import "./Form.css";
import "../../styles/global.css";

const Form = ({
  onGenerateReport,
  isEditable,
  setReportPages,
  setIsEditable,
  updatedReportPages,
  language,
}) => {
  const [formData, setFormData] = useState({
    year: "",
    month: "",
    day: "",
    district: "",
  });

  const translations = {
    en: {
      year: "Year",
      month: "Month",
      day: "Day",
      district: "District",
      selectMonth: "Select a month",
      selectDay: "Select a day",
      selectDistrict: "Select a district",
      generate: "Generate Report",
      reEnter: "Re-enter Details",
      download: "Download Report",
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      districts: [
        "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
        "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara",
        "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar",
        "Matale", "Matara", "Moneragala", "Mullaitivu", "Nuwara Eliya",
        "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
      ]
    },
    si: {
      year: "වර්ෂය",
      month: "මාසය",
      day: "දිනය",
      district: "දිස්ත්‍රික්කය",
      selectMonth: "මාසයක් තෝරන්න",
      selectDay: "දිනයක් තෝරන්න",
      selectDistrict: "දිස්ත්‍රික්කයක් තෝරන්න",
      generate: "වාර්තාව ජනනය කරන්න",
      reEnter: "විස්තර නැවත ඇතුළත් කරන්න",
      download: "වාර්තාව බාගන්න",
      months: [
        "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි",
        "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
      ],
      districts: [
        "අම්පාර", "අනුරාධපුර", "බදුල්ල", "බටිකලෝව", "කොළඹ",
        "ගාල්ල", "ගමපහ", "හම්බන්තොට", "යාපනය", "කළුතර",
        "මහනුවර", "කෑගල්ල", "කිලිනොච්චිය", "කුරුණෑගල", "මන්නාරම",
        "මාතලේ", "මාතර", "මොනරාගල", "මුලතිව්", "නුවර එලිය",
        "පොළොන්නරුව", "පුත්තලම", "රත්නපුර", "ත්‍රිකුණාමලය", "වවුනියාව"
      ]
    },
    ta: {
      year: "ஆண்டு",
      month: "மாதம்",
      day: "திகதி",
      district: "மாவட்டம்",
      selectMonth: "ஒரு மாதத்தைத் தேர்ந்தெடுக்கவும்",
      selectDay: "திகதியைத் தேர்ந்தெடுக்கவும்",
      selectDistrict: "மாவட்டத்தைத் தேர்ந்தெடுக்கவும்",
      generate: "அறிக்கையை உருவாக்குக",
      reEnter: "விவரங்களை மீண்டும் உள்ளிடவும்",
      download: "அறிக்கையை பதிவிறக்கவும்",
      months: [
        "ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்",
        "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"
      ],
      districts: [
        "அம்பாறை", "அனுராதபுரம்", "பதுளை", "மட்டக்களப்பு", "கொழும்பு",
        "காலி", "கம்பஹா", "அம்பாந்தோட்டை", "யாழ்ப்பாணம்", "களுத்துறை",
        "கண்டி", "கேகாலை", "கிலிநொச்சி", "குறுநாகல்", "மன்னார்",
        "மாத்தளை", "மாத்தறை", "மொனராகலை", "முல்லைத்தீவு", "நுவரெலியா",
        "பொலன்னறுவை", "புத்தளம்", "இரத்தினபுரி", "திருகோணமலை", "வவுனியா"
      ]
    }
  };

  const t = translations[language] || translations["en"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateReport(formData);
  };

  const handleReEnter = () => {
    setReportPages([]);
    setIsEditable(true);
    setFormData({
      year: "",
      month: "",
      day: "",
      district: "",
    });
  };

  const handleDownload = () => {
    if (updatedReportPages.length > 0) {
      try {
        const filename = `${formData.district}_Report_${formData.day}_${formData.month}_${formData.year}.html`;
        const blob = new Blob([updatedReportPages.join("\n")], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading report:", error);
        alert("Failed to download the report. Please try again.");
      }
    } else {
      alert("No report available to download.");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="year" className="label">{t.year}:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="input"
            required
            min="1900"
            max="2100"
            disabled={!isEditable}
          />
        </div>

        <div className="form-group">
          <label htmlFor="month" className="label">{t.month}:</label>
          <select
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="input"
            required
            disabled={!isEditable}
          >
            <option value="">{t.selectMonth}</option>
            {t.months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="day" className="label">{t.day}:</label>
          <select
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="input"
            required
            disabled={!isEditable}
          >
            <option value="">{t.selectDay}</option>
            {[...Array(31).keys()].map((day) => (
              <option key={day + 1} value={day + 1}>{day + 1}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="district" className="label">{t.district}:</label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="input"
            required
            disabled={!isEditable}
          >
            <option value="">{t.selectDistrict}</option>
            {t.districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="button"
          disabled={!isEditable}
        >
          {t.generate}
        </button>

        {!isEditable && (
          <div className="button-group">
            <button
              className="button re-enter-button"
              onClick={handleReEnter}
            >
              {t.reEnter}
            </button>
            <button
              className="button download-button"
              onClick={handleDownload}
            >
              {t.download}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
