import axios from "axios";

const BASE_URL = "http://localhost:5000/api/posts";

export const createPost = async (postData: {
  title: string;
  description: string;
  posterUrl?: string;
}) => {
  const res = await axios.post(BASE_URL, postData);
  return res.data;
};

export const getPosts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

