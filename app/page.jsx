import Header from "@/components/Header";
import Image from "next/image";
import { data } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <div className="flex flex-1  ">
        <div className="w-1/2 flex items-center flex-col justify-center">
          <div className=" gap-10 flex flex-col items-start justify-center">
            <h1 className="text-8xl font-extrabold">
              Make <br /> remote work
            </h1>
            <p className="text-2xl text-gray-400 max-w-150">
              {data.subHeading}
            </p>
            <button className="border cursor-pointer self-start w-40 h-15 rounded-xl ">
              {data.button}
            </button>
            <div className="flex justify-between items-center w-full"
            >
              {data.images.map((img, i) => {
                return (
                  <Image
                    src={img}
                    key={i}
                    width={100}
                    height={100}
                    alt="Image"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 flex p-10 items-center justify-center h-full">
          <Image
            className="h-full"
            width={600}
            height={600}
            alt="image"
            src={"/images/image-hero-desktop.png"}
          />
        </div>
      </div>
    </div>
  );
}
