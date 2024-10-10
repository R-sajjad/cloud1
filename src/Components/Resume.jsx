import React, { useState } from 'react';

const Resume = () => {
  const [progress, setProgress] = useState(0);

  const downloadFile = () => {
    // Corrected file path with forward slashes
    const fileUrl = 'public/My Brand new Resume.pdf'; 
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Return the blob promise here
        return response.blob();
      })
      .then(blobData => {
        // Create an object URL for the blob
        const downloadUrl = window.URL.createObjectURL(blobData);
        const a = document.createElement('a');
        // Set href to the object URL
        a.href = downloadUrl;
        // Set the desired filename for the download
        a.download = 'My_Brand_New_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        // Clean up the object URL
        window.URL.revokeObjectURL(downloadUrl);
        a.remove();
        // Here you might want to implement actual progress tracking
        setProgress(100); 
      })
      .catch(error => {
        console.error('There was a problem with the file download:', error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={downloadFile} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition duration-1000 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200 mt-10">
        Download Resume
      </button>
      <progress value={progress} max="100" className="w-[400px] mt-10 rounded-lg"></progress>
      <span className="mt-2 text-white">{progress}%</span>
    </div>
  );
};

export default Resume;
