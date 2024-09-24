import React from "react";

export default function Resume() {
  return (
    <div>
      <h2>MY RESUME</h2>
      {/* Provide download link for the PDF */}
      <a href="/resume.pdf" download="Resume.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md">
        Download Resume
      </a>

      {/* Embed the PDF directly into the page */}
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </div>
  );
}
