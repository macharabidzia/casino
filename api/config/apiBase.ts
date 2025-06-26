// lib/api/axios.ts
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!BASE_URL) throw new Error("⛔  NEXT_PUBLIC_API_BASE_URL is missing");

export const api = axios.create({
  baseURL: BASE_URL, // e.g. https://api.remailer.eu
  timeout: 10_000, // 10 s network timeout
  
});
