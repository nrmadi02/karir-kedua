import Footer from "@/components/Footer";
import SectionAskIPB from "@/components/Sections/SectionAskIPB";
import Image from "next/image";
import React from "react";

export default function InstitutPurnaBaktiPage() {
  return (
    <div>
      <section className="bg-[#FF9248] ">
        <div className="container mx-auto flex min-h-[calc(100vh-800px)] flex-row px-10 gap-5 items-center justify-between">
          <div className="w-[50%] h-full">
            <Image
              alt="_bg-home"
              src={"/images/bg-2.png?dasd"}
              width={800}
              height={800}
              className="min-h-[400px]"
            />
          </div>
          <div className="w-[50%] h-full text-white">
            {/* <div className="px-5 py-1 bg-white w-max text-[#FF9248] rounded-lg font-semibold bg-opacity-80">
              <p>Institut Purna Bakti</p>
            </div> */}
            <h1 className="text-5xl font-bold mt-5">
              Tetap Relevan dan Kembangkan Diri
            </h1>
            <p className="max-w-xl font-medium mt-3 text-lg">
              Dapatkan Akses Lebih Banyak Lowongan Pekerjaan “Certified Only”
              dan Siapkan dirimu untuk kembali kedunia kerja dan menjadi Digital
              Ready Talent
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[60px] pb-[60px]">
        <div className="container mx-auto flex flex-col px-10 items-center justify-center">
          <h1 className="text-4xl font-bold text-center">
            Keunggulan Karir Kedua
          </h1>
          <div className="grid grid-cols-4 flex-col gap-5 mt-20 justify-between w-full">
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                <Image
                  alt="_bg-home"
                  src={"/icons/icon-1.png"}
                  width={80}
                  height={80}
                  // className="min-h-[100px]"
                />
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Kembali Aktif Dengan Bersosialisasi Dengan Senior Students
                Lainnya Lewat Kelas Tatapmuka.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                <Image
                  alt="_bg-home"
                  src={"/icons/icon-2.png"}
                  width={80}
                  height={80}
                  // className="min-h-[100px]"
                />
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Dapatkan Pengetahuan Relevan Untuk Persiapan Karirkedua Anda –
                Jadi Digital Ready Talent.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                <Image
                  alt="_bg-home"
                  src={"/icons/icon-3.png"}
                  width={80}
                  height={80}
                  // className="min-h-[100px]"
                />
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Pelajari Metode Komunikasi Efektif Untuk Millenial Dan Gen-Z,
                Tutup Intergenerational Gap.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[80px] w-[80px] bg-white shadow p-2 rounded-lg">
                <Image
                  alt="_bg-home"
                  src={"/icons/icon-4.png"}
                  width={80}
                  height={80}
                  // className="min-h-[100px]"
                />
              </div>
              <p className="mt-2 text-gray-500 font-medium">
                Lebih Akrab Dengan Teknologi Digital Untuk Memungkinkan Kerja
                Jarak Jauh Dan Kerja Dari Rumah.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-20">
            <div>
              <h1 className="text-5xl font-semibold text-center max-w-3xl">
                Apa yang didapatkan setelah tersertifikasi Purna Academy by
                Karir<strong className="text-[#FF9248]">Kedua</strong>
              </h1>
            </div>
            <div className="mt-10 relative">
              <div>
                <div className="flex flex-row gap-20 justify-end items-center">
                  <div className="py-10">
                    <p className="text-2xl max-w-[200px] text-center font-semibold">
                      Akses ke “Certified Only” Lowongan Kerja
                    </p>
                  </div>
                  <div className="py-10">
                    <p className="text-2xl font-semibold max-w-[200px] ">
                      Tersertifikasi sebagai “Digital Ready Talent”
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[350px] w-[2px] absolute top-5 right-0 left-0 mx-auto bg-[#FF9248]"></div>
              <div className="border-t-[2px] border-gray-400">
                <div className="flex flex-row justify-end gap-20 items-center">
                  <div className="py-10">
                    <p className="text-2xl font-semibold max-w-[200px]">
                      Lebih Relevan di dunia Digital dan Rekan Kerja yang lebih
                      muda
                    </p>
                  </div>
                  <div className="py-10">
                    <p className="text-2xl font-semibold max-w-[200px]">
                      Kerja Jarak Jauh, Kerja dari Rumah, Pendapatan Lebih
                      Tinggi*
                    </p>
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
          <div className="flex  flex-col justify-center items-center mt-20">
            <Image
              alt="_bg-home"
              src={"/images/pt.png"}
              width={800}
              height={400}
              className="min-h-[100px]"
            />
            <Image
              alt="_bg-home"
              src={"/images/pt-2.png"}
              width={200}
              height={100}
              className="min-h-[100px]"
            />
          </div>
          <p className="mt-5 text-xl font-medium">
            dan <strong className="text-[#FF9248]">750+</strong> Hiring Partners
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
                  src={"/images/picture4.png"}
                  width={100}
                  height={100}
                  className="min-h-[100px] rounded-full"
                />
                <div>
                  <p className="ml-5 text-xl font-semibold">Eka Hartanto</p>
                  <p className="ml-5 text-gray-500 font-medium">
                    Pencinta Burung
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                "Wow, job portal ini bikin pensiun jadi anti-mainstream! Dari
                ngopi doang, sekarang saya jadi barista senior!"
              </p>
            </div>
            <div className="w-[500px] rounded-3xl bg-white h-[300px] p-8">
              <div className="flex flex-row">
                <Image
                  alt="_bg-home"
                  src={"/images/picture3.png"}
                  width={100}
                  height={100}
                  className="min-h-[100px] rounded-full"
                />
                <div>
                  <p className="ml-5 text-xl font-semibold">Dwi Hartanto</p>
                  <p className="ml-5 text-gray-500 font-medium">
                    Mantan Jurnalis
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-500">
                "Baru tahu ternyata pensiunan bisa jadi influencer di dunia
                kerja. Job portal ini bener-bener bikin saya merasa kayak
                seleb!"
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
