import React, { useEffect } from 'react';

const Meta = ({
  title = 'Noman Latif | Full Stack Developer',
  description = 'Explore the portfolio of Noman Latif — a MERN Stack Developer creating fast, modern web apps.',
  keywords = 'React, Node.js, MERN Stack, Full Stack Developer, Portfolio, JavaScript, Tailwind CSS',
}) => {
  useEffect(() => {
    document.title = title;

    // Set or update meta description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set or update meta keywords
    const keywordTag = document.querySelector('meta[name="keywords"]');
    if (keywordTag) {
      keywordTag.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
  }, [title, description, keywords]);

  return null; // Nothing rendered visually
};

export default Meta;
