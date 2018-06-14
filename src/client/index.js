import axios from "axios"

const headersInfo = () => ({
  Accept: "application/json",
  "Content-Type": "application/json"
})

export const fetchPosts = () => axios.get("/api/posts", {
  headers: headersInfo()
})

export const createPost = data => axios.post(
  "/api/posts",
  data,
  { headers: headersInfo() }
)

export const updatePosts = (id, data) => axios.put(
  `/api/posts/${id}`,
  data,
  { headers: headersInfo() }
)