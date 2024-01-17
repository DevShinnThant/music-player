import { getAlbumns } from "@/lib/store/server/album/get";

import AlbumItem from "./(components)/AlbumItem";

export default async function Albums() {
  const albums = await getAlbumns();

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="text-2xl tracking-wide text-white font-semibold">
        Albums
      </div>
      <div className="grid grid-cols-12 gap-6">
        {albums.map((album) => (
          <AlbumItem key={album.id} item={album} />
        ))}
      </div>
    </div>
  );
}
