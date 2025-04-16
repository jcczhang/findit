import { useState } from "react";
import { createPost } from "./api/posts";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createPost({ title, description, posterUrl });
      alert("✅ Post created!");
      console.log(result);
      setTitle("");
      setDescription("");
      setPosterUrl("");
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Poster Image URL (optional):</label><br />
          <input value={posterUrl} onChange={e => setPosterUrl(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>Submit</button>
      </form>
    </div>
  );
}
