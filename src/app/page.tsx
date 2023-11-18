import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FF9248] min-h-screen">
      <div className="container mx-auto min-h-screen flex flex-row -m-[97px] items-center justify-center">
        <div className="w-[50%] h-full">
          <div className="bg-white rounded-full pt-3 px-3 pl-5 overflow-hidden w-max">
            <Image
              alt="_bg-home"
              src={"/images/bg-home.png"}
              width={400}
              height={400}
              className="min-h-[300px]"
            />
          </div>
        </div>
        <div className="w-[40%] h-full text-white">
          <h1 className="text-5xl font-bold">Karir Kedua</h1>
          <p className="max-w-xl font-medium mt-3 text-lg">
            Reskilling the senior workers, and finding the second carrer for the
            50+ workers
          </p>
        </div>
      </div>
    </div>
  );
}
