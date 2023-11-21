'use client'

import Footer from "@/components/Footer";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

interface Jobs {
  id: number,
  title: string;
  company: string;
  location: string;
  date: string;
  categories: Array<string>;
  status: Array<string>;
  description: string;
}

const ItemsJobs: Array<Jobs> = [
  {
    id: 1,
    title: "Marketing",
    company: "PT. ABC",
    location: "Jakarta",
    date: "2 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify", "Certified"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "PT. Surya Abadi",
    location: "Jakarta",
    date: "10 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify", "Certified"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
  {
    id: 3,
    title: "Administasi",
    company: "PT. ABC",
    location: "Jakarta",
    date: "2 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
  {
    id: 4,
    title: "Marketing",
    company: "PT. ABC",
    location: "Jakarta Utara",
    date: "2 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
  {
    id: 5,
    title: "Marketing",
    company: "PT. ABC",
    location: "Jakarta Utara",
    date: "2 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify", "Certified"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
  {
    id: 6,
    title: "Marketing",
    company: "PT. ABC",
    location: "Jakarta Utara",
    date: "2 hari yang lalu",
    categories: ["Full Time", "Part Time"],
    status: ["Verify", "Certified"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates voluptatum. Quisquam, quidem voluptate.",
  },
];

export default function PurnaLokerPage() {
  const [select, setSelect] = useState<Jobs | null>(null);
  return (
    <div>
      <section>
        <div className="container mx-auto flex flex-col px-10 py-7">
          <div className="border-b-[2px] border-[#FF6700] pb-5">
            <div className="flex items-center gap-3 w-full">
              <input
                type="text"
                placeholder="Cari Pekerjaan"
                className="w-full h-[50px] rounded-lg border border-gray-400 px-5"
              />
              <input
                type="text"
                placeholder="Lokasi"
                className="w-full h-[50px] rounded-lg border border-gray-400 px-5"
              />
              <button className="bg-[#FF6700] text-white px-5 py-2 rounded-lg">
                Cari
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="bg-gray-400 text-white px-5 py-2 rounded-lg">
                Date Post
              </button>
              <button className="bg-gray-400 text-white px-5 py-2 rounded-lg">
                Job Type
              </button>
              <button className="bg-gray-400 text-white px-5 py-2 rounded-lg">
                Lokasi
              </button>
              <button className="bg-gray-400 text-white px-5 py-2 rounded-lg">
                Company
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container mx-auto flex flex-col px-10 pb-10">
          <div className="flex gap-10">
            <div className="w-[50%]">
              <p className="text-2xl" style={{ color: "#FF6700" }}>
                Hasil Pencarian{" "}
                <span className="font-semibold">Marketing</span>
              </p>
              <div className="flex items-center justify-between mt-2">
                <p>
                  Filter by: <span className="font-semibold">Date Post</span>
                </p>
                <p className="text-gray-600 text-sm">127 Hasil</p>
              </div>
              <div className="mt-3 flex flex-col gap-3">
                {ItemsJobs.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelect(item)}
                    className={`border-[1px] cursor-pointer transition-all px-5 rounded-lg hover:border-2 hover:border-[#FF6700] border-gray-400 py-5 ${
                      select === item && "border-[#FF6700]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-2xl font-semibold">{item.title}</p>
                        <p className="text-gray-600 text-lg">
                          {item.company} - {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-3">
                      <div className="flex gap-2">
                        {item.categories.map((category, index) => (
                          <p
                            key={index}
                            className="text-gray-800 text-md py-1 px-2 font-bold bg-gray-300 rounded-md"
                          >
                            {category}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex gap-2">
                        {item.status.map((status, index) => (
                          <p
                            key={index}
                            className="text-green-500 font-semibold   text-sm"
                          >
                            {status} &#10003;
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 text-gray-600">
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mt-3">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <label className="text-lg font-semibold">Email Address</label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full h-[50px] rounded-lg border border-gray-400 px-5"
                />
              </div>
              <div className="mt-2">
                <p className="text-gray-500">
                  By creating a job alert, you agree to our Terms. You can
                  change your consent settings at any time by unsubscribing or
                  as detailed in our terms.
                </p>
              </div>
              <div className="mt-5">
                <p className="text-lg font-bold text-gray-700">
                  People also searched:
                </p>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Data Analyst
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Programmer
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Data Scientist
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Data Engineer
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Administrator
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Admin
                  </div>
                  <div className="px-4 py-2 cursor-pointer rounded-lg bg-gray-300 font-bold">
                    &#x1F50E; Social Media Specialist
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] sticky top-24 p-3">
              {select && (
                <div className="w-full sticky top-24 p-3">
                  <div className="border-[1px] rounded-xl border-gray-400 p-5 min-h-[300px]">
                    <div className="w-full items-end flex justify-end">
                      <IoIosClose
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => setSelect(null)}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-semibold">{select.title}</p>
                        <p className="text-gray-600 text-lg">
                          {select.company} - {select.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-[1px]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-500 font-bold text-sm ml-2">
                          Rating 4.0
                        </p>
                      </div>
                    </div>
                    <button onClick={() => {
                      toast.success('Berhasil melamar pekerjaan')
                    }} className="bg-[#FF6700] text-white px-5 py-2 rounded-lg mt-5 w-full">
                      Apply
                    </button>
                    <div className="mt-5 border-t text-gray-500 border-gray-400 pt-5">
                      <p className="font-semibold text-base">Description:</p>
                      <p className="mt-2">Kualifikasi:</p>
                      <ul className="list-disc list-inside">
                        <li>Usia maks. 30 tahun</li>
                        <li>
                          Minimum Sarjana / S1 Akuntansi / Keuangan IPK min.
                          3,00
                        </li>
                        <li>
                          Fresh Graduate atau min. 2 tahun pengalaman di bidang
                          yang sama
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
