"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // Import NextAuth hook

const upload = () => {
  const { data: session } = useSession(); // Get session data (including user email)
  const [demonstration, setDemonstration] = useState(null);
  const [design, setDesign] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Update the file handler to set the correct file for each input
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "demonstration") {
      setDemonstration(files[0]); // Set demonstration file
    } else if (name === "design") {
      setDesign(files[0]); // Set design file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Ensure that we have a session and email
    if (!session || !session.user || !session.user.email) {
      setMessage("You need to be logged in to upload files.");
      setIsLoading(false);
      return;
    }

    // Create form data to send with files and email
    const formData = new FormData();
    formData.append("email", session.user.email); // Get email from session
    formData.append("demonstration", demonstration);
    formData.append("design", design);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value instanceof File ? value.name : value);
    }

    try {
      const response = await fetch("/api/filesubmission", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Files uploaded successfully!");
      } else {
        setMessage(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      setMessage("An error occurred while uploading files.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload Files</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Demonstration File:</label>
          <input
            type="file"
            name="demonstration"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Design File:</label>
          <input
            type="file"
            name="design"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default upload;
