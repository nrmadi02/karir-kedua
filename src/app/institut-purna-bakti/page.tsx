import Footer from "@/components/Footer";
import SectionAskIPB from "@/components/Sections/SectionAskIPB";
import Image from "next/image";
import React from "react";

export default function InstitutPurnaBaktiPage() {
  return (
    <div>
      <section className="bg-[#FF9248] pt-[200px] pb-[200px]">
        <div className="container mx-auto flex flex-row px-10 items-center justify-center">
          <div className="w-[50%] h-full text-white">
            <div className="px-5 py-1 bg-white w-max text-[#FF9248] rounded-lg font-semibold bg-opacity-80">
              <p>Institut Purna Bakti</p>
            </div>
            <h1 className="text-5xl font-bold mt-5">Karir Kedua</h1>
            <p className="max-w-xl font-medium mt-3 text-lg">
              Ikut Kelas Sertifikasi Untuk Menjadi Certified Talent
            </p>
          </div>
          <div className="w-[50%] h-full flex justify-end">
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
        </div>
      </section>
      <section className="pt-[60px] pb-[60px]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Keunggulan Karir Kedua
          </h1>
          <div className="grid grid-cols-3 flex-col gap-5 mt-20 justify-between w-full">
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                Icon
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Menutup Intergenerational Gap.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                Icon
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Kuasai Teknologi yang Dibutuhkan dalam Dunia Kerja Digital.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                Icon
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Kuasai Komunikasi yang Efektif Dengan Millenial dan Gen Z.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-20">
            <div className="w-[50%]">
              <h1 className="text-5xl font-semibold">
                Profesi yang Bisa Ditempati
              </h1>
            </div>
            <div className="w-max relative">
              <div>
                <div className="flex flex-row gap-20 justify-end items-center">
                  <div className="py-10">
                    <p className="text-2xl text-center font-semibold">
                      Digital Marketing
                    </p>
                  </div>
                  <div className="py-10">
                    <p className="text-2xl font-semibold">Digital Marketing</p>
                  </div>
                </div>
              </div>
              <div className="h-[150px] w-[2px] absolute top-10 right-0 left-0 mx-auto bg-gray-400"></div>
              <div className="border-t-[2px] border-gray-400">
                <div className="flex flex-row justify-end gap-20 items-center">
                  <div className="py-10">
                    <p className="text-2xl font-semibold">Digital Marketing</p>
                  </div>
                  <div className="py-10">
                    <p className="text-2xl font-semibold">Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[60px] pb-[60px]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl font-bold text- max-w-xl text-center leading-[50px]">
            Perusahaan yang telah bekerja sama dengan Karir Kedua
          </h1>
          <div className="flex justify-center items-center mt-20">
            <Image
              alt="_bg-home"
              src={"/images/pt.png"}
              width={800}
              height={400}
              className="min-h-[100px]"
            />
          </div>
          <p className="mt-5 text-xl font-medium">
            dan <strong className="text-[#FF9248]">700+</strong> Hiring Partner
            Lainnya
          </p>
        </div>
      </section>
      <section className="pt-[60px] pb-[60px] bg-[#FF9248]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl text-white font-bold text- max-w-xl text-center leading-[50px]">
            Kata Mereka Tentang Karir Kedua
          </h1>
          <div className="flex flex-row items-center mt-10 justify-center gap-10 ">
            <div className="w-[500px] rounded-3xl bg-white h-[300px] p-8">
              <div className="flex flex-row">
                <Image
                  alt="_bg-home"
                  src={"/images/bg-home.png"}
                  width={100}
                  height={100}
                  className="min-h-[100px] rounded-full"
                />
                <div>
                  <p className="ml-5 text-xl font-semibold">Nama</p>
                  <p className="ml-5 text-gray-500 font-medium">
                    Posisi di Perusahaan
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus, quae quos, repellat, natus voluptatum voluptas
                voluptatem facere quia quibusdam ipsa? Quisquam, quidem
                voluptate. Quisquam, quidem voluptate.
              </p>
            </div>
            <div className="w-[500px] rounded-3xl bg-white h-[300px] p-8">
              <div className="flex flex-row">
                <Image
                  alt="_bg-home"
                  src={"/images/bg-home.png"}
                  width={100}
                  height={100}
                  className="min-h-[100px] rounded-full"
                />
                <div>
                  <p className="ml-5 text-xl font-semibold">Nama</p>
                  <p className="ml-5 text-gray-500 font-medium">
                    Posisi di Perusahaan
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatibus, quae quos, repellat, natus voluptatum voluptas
                voluptatem facere quia quibusdam ipsa? Quisquam, quidem
                voluptate. Quisquam, quidem voluptate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[60px] pb-[60px]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl font-bold text- max-w-xl text-center leading-[50px]">
            Form Pendaftaran
          </h1>
          <div className="mt-10 font-medium py-4 px-5 max-w-xl shadow-lg w-full rounded-lg">
            <p>Informasi Data Diri</p>
            <div className="flex flex-col mt-2">
              <label className="font-bold">Nama</label>
              <input className="rounded-md border transition-all focus:border-none border-gray-300 outline-none px-3 py-2 focus:ring-[1px] focus:ring-[#FF9248]" />
            </div>
            <div className="flex flex-col mt-2">
              <label className="font-bold">Email</label>
              <input className="rounded-md border transition-all focus:border-none border-gray-300 outline-none px-3 py-2 focus:ring-[1px] focus:ring-[#FF9248]" />
            </div>
            <div className="flex flex-col mt-2">
              <label className="font-bold">No. HP</label>
              <input className="rounded-md border transition-all focus:border-none border-gray-300 outline-none px-3 py-2 focus:ring-[1px] focus:ring-[#FF9248]" />
            </div>
            <div className="flex flex-col mt-2">
              <label className="font-bold">Alamat</label>
              <textarea className="rounded-md border transition-all focus:border-none border-gray-300 outline-none px-3 py-2 focus:ring-[1px] focus:ring-[#FF9248]" />
            </div>
            <button className="bg-[#FF9248] mt-5 rounded-lg text-white font-semibold text-lg py-3 w-[200px]">
              <p>Daftar</p>
            </button>
          </div>
        </div>
      </section>
      <section className="pt-[60px] pb-[60px]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl mb-5 font-bold text- max-w-xl text-center leading-[50px]">
            Ask Us Anything
          </h1>
          <SectionAskIPB />
        </div>
      </section>
      <Footer />
    </div>
  );
}
