import axios from "@/lib/api/axios";
import { playlistApiResSchema } from "./schema";
import { playlistSelector } from "./selector";

const API_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getPlaylists = async () => {
  const response = await axios.get(
    `${API_URL}/api/playlists?pagination[page]=1&pagination[pageSize]=3&populate=*`
  );

  const modifedData = playlistSelector(
    playlistApiResSchema.parse(response.data)
  );

  return modifedData;
};

//  `${API_URL}/api/playlists?pagination[page]=1&pagination[pageSize]=3&populate[0]=music,image&pupulate[0]=image&&populate[1]=music.file`;
