import Image from "next/image";

export default function Home() {
  return (
    <div className="relative pt-[121px]">
      <div className="w-full h-full absolute top-0 ">
        <div className="w-[80%] h-full">
          <Image
            alt="_bg-home"
            src={"/images/bg-home-2.png"}
            width={1000}
            height={1000}
            className="min-h-full"
          />
        </div>
        <div className="w-[60%] h-full absolute right-0 top-0 bg-gradient-to-l from-white via-white"></div>
      </div>
      <div className="container px-10 mx-auto min-h-screen -mt-[202px] flex flex-row items-center justify-end w-full">
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
        <div className="w-full h-full relative z-20 text-gray-900 flex flex-col justify-end items-end">
          <h1 className="text-4xl font-bold max-w-[400px]">
            Senior Citizen’s JOB Portal and{" "}
          </h1>
          <p className="max-w-[400px] text-[#FF6700] font-medium mt-3 text-5xl">
            Reskilling Platform
          </p>
        </div>
      </div>
    </div>
  );
}
