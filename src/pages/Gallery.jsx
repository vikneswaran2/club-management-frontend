import React, { useState, useEffect } from "react";
import { getUploadUrl } from "../api";

export default function Gallery() {
  const [images, setImages] = useState([
    // Initially empty or fetch existing images from backend if applicable
  ]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return alert("Select a file first");
    try {
      // Get signed URL from backend
      const data = await getUploadUrl(file.name);
      const uploadUrl = data.url;

      // Upload file directly to S3
      await fetch(uploadUrl, {
        method: "PUT",
        body: file,
      });

      // After upload, update images array (you may need to store URLs in backend)
      setImages([...images, URL.createObjectURL(file)]);
      setFile(null);
      alert("Upload successful");
    } catch {
      alert("Upload failed");
    }
  };

  return (
    <div className="container">
      <h2>📸 Gallery</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="event"
            style={{ width: "300px", height: "200px", borderRadius: "10px" }}
          />
        ))}
      </div>
    </div>
  );
}
