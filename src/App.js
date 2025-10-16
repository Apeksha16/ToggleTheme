import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePageDiv1 from "./components/HomePageDiv1";

import "../index.css";
import { ThemeProvider } from "./utils/ThemeContext";

const App = () => {
  const data = [
   {
      id: "1",
      heading: "Tech Stack & Skills",
      details: [
        { key: "Frontend", description: "React, TypeScript, Next.js, Tailwind CSS" },
        { key: "Backend", description: "Node.js, Express, Python, FastAPI" },
        { key: "Database", description: "PostgreSQL, MongoDB, Redis, Supabase" },
        { key: "Cloud & DevOps", description: "AWS, Docker, Kubernetes, CI/CD" },
        {key: "AI, Data & Automation", description:"Machine Learning, OpenAI API, LangChain, TensorFlow, Pandas"}
      ]
    },
    {
      id: "2",
      heading: "Company Profile",
      details: [
        { key: "Company Name", description: "InnovateTech Solutions" },
        { key: "Founded", description: "January 2023" },
        { key: "Industry", description: "Software Development & AI" },
        { key: "Location", description: "San Francisco, CA" },
        { key: "Team Size", description: "25+ Engineers" }
      ]
    },
    {
      id: "3",
      heading: "Navigation Menu",
      details: [
        { key: "🏠 Dashboard", description: "Main overview and analytics" },
        { key: "🚀 Projects", description: "Active development projects" },
        { key: "👥 Team", description: "Team members and roles" },
        { key: "⚙️ Settings", description: "Configuration and preferences" },
        { key: "📊 Analytics", description: "Performance metrics and insights" }
      ]
    },
   {
      id: "4",
      heading: "Current Projects",
      details: [
        { key: "AI Chat Platform", description: "Real-time messaging with AI integration" },
        { key: "E-commerce Dashboard", description: "Analytics platform for online retailers" },
        { key: "Mobile Banking App", description: "Secure fintech solution for payments" },
        {key:"Smart Resume Builder", description:"AI-powered resume generator using NLP to tailor resumes for job roles"},
        {key:"IoT Device Monitor", description:"Cloud-based dashboard for tracking and managing IoT sensor data in real time"}
      ]
    },
   
  ];
  return (
    <ThemeProvider>
      <Header />
      <div className="middle-container">
        <Sidebar />
        <div className="container-boxes">
          {data.map((item) => (
            <HomePageDiv1 data={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
