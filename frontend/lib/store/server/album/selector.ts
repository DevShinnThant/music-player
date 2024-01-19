import * as z from "zod";
import { albumApiResArraySchema, albumDetailApiResSchema } from "./schema";
import { SelectAlbum } from "./types";

export const albumArraySelector = (
  dataObj: z.infer<typeof albumApiResArraySchema>
): SelectAlbum[] => {
  return dataObj.data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    artist: item.attributes.artist_name,
    cover:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.cover.data.attributes.url,
    songs: item.attributes.music.data.map((song, index) => ({
      id: song.id,
      index,
      name: song.attributes.name,
      artist: song.attributes.artist,
      image:
        process.env.NEXT_PUBLIC_DATABASE_URL +
        song.attributes.image.data.attributes.url,
      song:
        process.env.NEXT_PUBLIC_DATABASE_URL +
        song.attributes.file.data.attributes.url,
    })),
  }));
};

export const albumObjectSelector = (
  dataObj: z.infer<typeof albumDetailApiResSchema>
): SelectAlbum => {
  const item = dataObj.data;
  return {
    id: item.id,
    name: item.attributes.name,
    artist: item.attributes.artist_name,
    cover:
      process.env.NEXT_PUBLIC_DATABASE_URL +
      item.attributes.cover.data.attributes.url,
    songs: item.attributes.music.data.map((song, index) => ({
      id: song.id,
      index,
      name: song.attributes.name,
      artist: song.attributes.artist,
      image:
        process.env.NEXT_PUBLIC_DATABASE_URL +
        song.attributes.image.data.attributes.url,
      song:
        process.env.NEXT_PUBLIC_DATABASE_URL +
        song.attributes.file.data.attributes.url,
    })),
  };
};
