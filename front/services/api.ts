import axios from "axios"
import { useMemo } from "react"

const api = axios.create({baseURL: process.env.NEXT_PLUBIC_API_URL})

export function useApi() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL
  const api = useMemo(() => axios.create({baseURL}), [baseURL])
  return api
}

export default api