import React from "react";

export default function Gallery() {
  const images = [
    "https://picsum.photos/300/200?random=1",
    "https://picsum.photos/300/200?random=2",
    "https://picsum.photos/300/200?random=3",
  ];

  return (
    <div className="container">
      <h2>📸 Gallery</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
