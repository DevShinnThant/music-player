"use client";

import { SelectAlbum } from "@/lib/store/server/album/types";
import AlbumItem from "./AlbumItem";
import { useMusicStore } from "@/lib/store/client/music";

interface Props {
  data: SelectAlbum[];
}

export default function AlbumSection({ data }: Props) {
  const { currentAlbumId } = useMusicStore();

  return (
    <div className="grid grid-cols-12 gap-6">
      {data.map((album) => (
        <AlbumItem
          active={currentAlbumId === album.id}
          key={album.id}
          item={album}
        />
      ))}
    </div>
  );
}
