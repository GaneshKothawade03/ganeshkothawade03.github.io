
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setDarkMode(stored === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"} min-h-screen transition-colors duration-300`}>
      <div className="fixed top-6 right-6 z-50">
        <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-full bg-blue-600 text-white shadow">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <motion.section initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
        className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold">Ganesh Kothawade</h1>
        <p className="mt-4 text-xl opacity-80">
          Jr. Developer | Automation & Analytics | UiPath | Power Automate
        </p>
      </motion.section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="opacity-80">
          RPA Developer with 2 years of experience in Power Automate, UiPath, Python, and SQL.
          Skilled in scalable automation using REFramework and Dispatcher–Performer.
        </p>
      </section>

      <section className="bg-gray-800/50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>

          {[
            {
              role: "Jr. Developer – Analytics & Automation",
              company: "Cognizant Technology Solutions",
              time: "Dec 2023 – Present"
            },
            {
              role: "Automation Developer Intern",
              company: "Persistent Systems",
              time: "Jan 2023 – Jun 2023"
            }
          ].map((e, i) => (
            <motion.div key={i}
              initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}}
              transition={{duration:0.5, delay:i*0.1}} viewport={{once:true}}
              className="mb-6 p-6 bg-gray-900 rounded-xl shadow">
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <p className="opacity-70">{e.company} | {e.time}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center py-8 opacity-60 text-sm">
        © {new Date().getFullYear()} Ganesh Kothawade
      </footer>
    </div>
  );
}
