import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './ManagementThemesMap.css';

const ManagementThemesMap = () => {
  const [expandedTheme, setExpandedTheme] = useState(null);

  const handleThemeClick = (theme) => {
    setExpandedTheme(expandedTheme === theme ? null : theme);
  };

  const themes = [
    {
      title: 'Managing Up',
      description: 'Effectively navigating relationships and influencing decisions at the managerial and executive levels.',
      details: [
        'Navigating Manager/Senior Leader Relationships',
        'Influencing Organizational Culture & Decisions',
        'Dealing with Ineffective Managers',
        'Navigating Organizational Changes'
      ],
      resources: ['Link to article 1', 'Link to video 1'],
    },
    {
      title: 'Managing Lateral Relationships',
      description: 'Collaborating across teams, building professional networks, and resolving conflicts with peers.',
      details: [
        'Building Consensus & Collaboration',
        'Networking & Finding Mentors',
        'Resolving Peer Conflicts',
        'Promoting Team/Platform Work'
      ],
      resources: ['Link to article 2', 'Link to video 2'],
    },
    {
      title: 'Managing Down',
      description: 'Leading a team effectively, setting goals, and managing performance.',
      details: [
        'Becoming a Manager',
        'Setting Goals & Motivating the Team',
        'Handling Team Disagreements',
        'Developing Team Culture & Vision'
      ],
      resources: ['Link to article 3', 'Link to video 3'],
    },
    {
      title: 'Managing Self and Career',
      description: 'Staying motivated and developing key skills for career growth.',
      details: [
        'Evaluating Job Opportunities',
        'Balancing Skill Development',
        'Preparing for Career Growth'
      ],
      resources: ['Link to article 4', 'Link to video 4'],
    },
    {
      title: 'Managing External Relationships',
      description: 'Understanding customers and collaborating with product management.',
      details: [
        'Tracking Customer Satisfaction',
        'Monitoring Industry Trends',
        'Collaborating with Product Management'
      ],
      resources: ['Link to article 5', 'Link to video 5'],
    },
  ];

  return (
    <div className="management-themes-map">
      {themes.map((theme) => (
        <div className="theme-container" onClick={() => handleThemeClick(theme.title)} key={theme.title}>
          <h3>{theme.title}</h3>
          {expandedTheme === theme.title ? (
            <div className="theme-details">
              <p>{theme.description}</p>
              <ul>
                {theme.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <h4>Resources:</h4>
              <ul>
                {theme.resources.map((resource, index) => (
                  <li key={index}>
                    <button className="resource-button" onClick={() => alert(`Clicked on ${resource}`)}>
                      {resource}
                    </button>
                  </li>
                ))}
              </ul>
              {expandedTheme === theme.title && <FiChevronUp />}
            </div>
          ) : (
            <FiChevronDown />
          )}
        </div>
      ))}
    </div>
  );
};

export default ManagementThemesMap;