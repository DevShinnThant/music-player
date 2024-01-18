import { getAlbums } from "@/lib/store/server/album/get";

import AlbumItem from "./(components)/AlbumItem";
import { useMusicStore } from "@/lib/store/client/music";
import AlbumSection from "./(components)/AlbumSection";

export default async function Albums() {
  const albums = await getAlbums();

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="text-2xl tracking-wide text-white font-semibold">
        Albums
      </div>
      <AlbumSection data={albums} />
    </div>
  );
}
