import Header from "@/app/header/Header";
import Presentation from "./sections/presentation";
import AboutMe from "./sections/aboutMe";
export default function Home() {
  return (
    <div>
      <div
        className="absolute z-[-1] w-full h-[50em] bg-purple-500"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 36%, 0 100%)",
        }}
      ></div>
      <div className="p-4 m-auto w-4/5">
        <Header />
        <Presentation />
        <AboutMe />
      </div>
    </div>
  );
}
