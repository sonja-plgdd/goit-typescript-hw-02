import axios from "axios";
import { FetchData } from "./types";

const baseURL = "https://api.unsplash.com/search/photos";

export const fetchImagesWithQuery = async (
  query: string,
  page: number
): Promise<FetchData> => {
  const response = await axios.get(baseURL, {
    headers: {
      Authorization: "Client-ID UvFQlH0IRUc8Hj0uLDQjUz32uTTyD080hF2VVgiTiXo",
    },
    params: {
      query: query,
      orientation: "landscape",
      page: page,
      per_page: 15,
    },
  });

  return response.data;
};
