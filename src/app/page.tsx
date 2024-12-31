
// components
import { Hero } from "./_components";
import {Skills} from "./_components";


export default function Home() {
  return (
    <div className="h-auto ">
      {/* decorate  */}
      <div className=" fixed -z-[1] -top-44 -left-44 size-[600px] border-[60px] border-gray-100 rounded-full"></div>
      {/* components  */}
      <Hero />
      <Skills />
    </div>
  );
}
