import axios from "axios"

const headersInfo = () => ({
  Accept: "application/json",
  "Content-Type": "application/json"
})

export const fetchAssemblies = () => axios.get("/api/v1/assemblies", {
  headers: headersInfo()
})