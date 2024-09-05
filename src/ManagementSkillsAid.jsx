import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ManagementSkillsAid.css';

const ManagementSkillsAid = () => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/management-skills.json`)
      .then(response => response.json())
      .then(data => setAreas(data.areas))
      .catch(error => {
        console.error('There was an error fetching the JSON data:', error);
        console.error ('URL is:', `${process.env.PUBLIC_URL}/management-skills.json`);
        console.error ('process.env.PUBLIC_URL is:', process.env.PUBLIC_URL);
        console.error ('process.env.NODE_ENV is:', process.env.NODE_ENV);
        console.error ('process.env.REACT_APP_API_URL is:', process.env.REACT_APP_API_URL);
        console.error ('process.env.REACT_APP_API_KEY is:', process.env.REACT_APP_API_KEY);
      });
  }, []);

  const handleAreaClick = (area) => {
    setSelectedArea(selectedArea === area ? null : area);
  };

  return (
    <div className="management-skills-aid">
      <h1>Management Skills Interactive Guide</h1>
      <div className="skill-grid">
        {areas.map(area => (
          <motion.div
            key={area.id}
            className={`skill-card ${selectedArea === area ? 'active' : ''}`}
            onClick={() => handleAreaClick(area)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            className="skill-details"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <h2>{selectedArea.title}</h2>
            <h4>Key Skills:</h4>
            <ul>
              {selectedArea.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h4>Scenario:</h4>
            <p>{selectedArea.scenario}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManagementSkillsAid;