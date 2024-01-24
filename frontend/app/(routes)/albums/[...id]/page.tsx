import { getAlbum } from "@/lib/store/server/album/get";
import SongSection from "./(components)/SongSection";
import AlbumCover from "./(components)/AlbumCover";
import Setting from "./(components)/Setting";

export default async function Album({
  params: { id },
}: {
  params: { id: number };
}) {
  const data = await getAlbum(id);

  return (
    <div className="w-full h-full flex flex-col gap-8 items-start overflow-hidden">
      <div className="w-full rounded-t-md h-2/5  flex flex-col gap-8 items-start">
        <AlbumCover data={data} />
        <Setting />
      </div>

      <div className="w-full h-[calc(100vh_-_420px)] overflow-y-auto">
        <SongSection data={data.songs} />
      </div>
    </div>
  );
}
