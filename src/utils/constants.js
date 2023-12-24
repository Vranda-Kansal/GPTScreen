export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TOKEN,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGAUGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "German", name: "German" },
  { identifier: "Polish", name: "Polish" },
];
