import AddPost from "@/component/homeitems/addPost";
import Feed from "@/component/homeitems/feed";
import LeftMenu from "@/component/homeitems/leftMenu";
import RightMenu from "@/component/homeitems/rightMenu";
import Stories from "@/component/homeitems/stories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-6 pt-6">
      {/* left */}
     <div className="hidden xl:block w-[20%] border">
    <LeftMenu></LeftMenu>
     </div>
     {/* center */}
     <div className="w-full lg:w-[70%] xl:w-[50%] border">
    <div className="flex flex-col gap-4">
     <Stories></Stories>
     <AddPost></AddPost>
     <Feed></Feed>
    </div>
     </div>
     {/* right */}
     <div className="hidden lg:block w-[30%] border">
      <RightMenu></RightMenu>
      </div>
    </div>
  );
}
