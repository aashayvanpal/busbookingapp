import Header from "./components/header";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <div className="absolute top-10 left-0 z-[0]  h-full w-full">
        <Image
          src={"/images/backgrounds/background-home.png"}
          alt="background image"
          className="relative "
          fill
        />
      </div>
      <Header />
    </div>
  );
}
