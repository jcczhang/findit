import React from "react";

export default function SectionPost() {
    return (
      <section id="post">
        <h2>📢 Create a Post</h2>
        <form>
          <label>Post Title:</label>
          <input type="text" placeholder="e.g., Lost Dog in Downtown LA" />
  
          <label>Description:</label>
          <textarea rows={4} placeholder="Describe your pet, when and where it was last seen, and how people can help." />
  
          <label>Attach Poster (optional):</label>
          <input type="file" />
  
          <button type="submit">Post</button>
        </form>
      </section>
    );
  }
  