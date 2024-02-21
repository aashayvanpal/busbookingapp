"use client";
import Header from "../../components/header";
import Image from "next/image";
import Link from "next/link";
export default function book() {
  return (
    <div className="h-full relative">
      <div className="absolute top-0 left-0 z-[0]  h-full min-h-screen w-full ">
        <Image
          src={"/images/backgrounds/background-2.png"}
          alt="background image"
          className="relative undraggable"
          fill
          onDrag={(e) => e.preventDefault()}
        />
      </div>
      <Header />
      {/* <div className="relative h-full min-h-screen z-[1] w-80 bg-[#23415D]">
          <ul className="text-white flex flex-col gap-8 text-3xl text-bold pt-10 ml-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/reservations">Reserve a seat!</Link>
            </li>
          </ul>
        </div> */}
      <div className="relative bg-white h-full min-h-screen w-full flex justify-center items-center">
        <h2 className="text-4xl">Your booking is completed</h2>
        <br />
        <Link
          className="p-2 m-2 text-3xl bg-[#24425E] rounded-lg text-white"
          href={"/"}
        >
          Okay !
        </Link>
      </div>
    </div>
  );
}
