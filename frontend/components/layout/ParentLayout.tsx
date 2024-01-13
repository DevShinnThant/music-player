import Sidebar from "./Sidebar";
import TopLayout from "./TopLayout";
import Playbar from "./PlayBar";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-width overflow-auto h-screen flex items-center">
      <Sidebar />
      <div className="relative bg-main w-full h-full flex flex-col">
        <TopLayout />
        <div className="px-7 h-[calc(100vh_-_100px)]">{children}</div>
        <Playbar />
      </div>
    </div>
  );
}
