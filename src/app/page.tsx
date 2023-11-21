import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FF9248] min-h-screen relative pt-[121px] bg-cover bg-blend-normal bg-[url('/images/bg-home-2.png')]">
      <div className="w-full h-full bg-black bg-opacity-40 absolute top-0">

      </div>
      <div className="container px-10 mx-auto min-h-screen -mt-[200px] flex flex-row items-center justify-center">
        {/* <div className="w-[50%] h-full">
          <div className="bg-white rounded-full pt-3 px-3 pl-5 overflow-hidden w-max">
            <Image
              alt="_bg-home"
              src={"/images/bg-home.png"}
              width={400}
              height={400}
              className="min-h-[300px]"
            />
          </div>
        </div> */}
        <div className="w-full h-full relative z-20 text-white">
          <h1 className="text-7xl font-bold">Karir Kedua</h1>
          <p className="max-w-xl font-medium mt-3 text-lg">
            Reskilling the senior workers, and finding the second carrer for the
            50+ workers
          </p>
        </div>
      </div>
    </div>
  );
}
