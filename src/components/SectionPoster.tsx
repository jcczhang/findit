import React from "react";

export default function SectionPoster() {
    return (
      <section id="poster">
        <h2>🖼 Generate Poster</h2>
        <form>
          <label>Pet Name:</label>
          <input type="text" placeholder="e.g., Bella" />
  
          <label>Breed:</label>
          <input type="text" placeholder="e.g., Golden Retriever" />
  
          <label>Color and Features:</label>
          <input type="text" placeholder="e.g., Light golden with a red collar" />
  
          <label>Last Seen Location:</label>
          <input type="text" placeholder="e.g., Main St. & 5th Ave" />
  
          <label>Contact Info:</label>
          <input type="text" placeholder="e.g., 555-123-4567" />
  
          <label>Upload Photo or Description:</label>
          <input type="file" />
          <textarea rows={3} placeholder="If no photo, describe the pet here..."></textarea>
  
          <button type="submit">Generate Poster</button>
        </form>
      </section>
    );
  }
  