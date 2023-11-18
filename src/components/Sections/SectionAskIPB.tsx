"use client";

import { useState } from "react";
import Accordion from "../Accordian";

const itemAskIPB = [
  {
    id: 1,
    question: "Apa itu Institut Purna Bakti?",
    answer:
      "Institut Purna Bakti adalah sebuah lembaga pendidikan yang berfokus pada pengembangan SDM lansia untuk kembali berkarir. Institut Purna Bakti merupakan bagian dari Karir Kedua.",
  },
  {
    id: 2,
    question: "Apa saja program yang ditawarkan Institut Purna Bakti?",
    answer:
      "Institut Purna Bakti menawarkan program sertifikasi yang terdiri dari 3 kelas, yaitu: 1. Kelas Sertifikasi Digital Marketing 2. Kelas Sertifikasi Human Resource Management 3. Kelas Sertifikasi Sales & Marketing",
  },
  {
    id: 3,
    question: "Siapa yang dapat mengikuti program Institut Purna Bakti?",
    answer:
      "Program Institut Purna Bakti dapat diikuti oleh lansia yang ingin kembali berkarir.",
  },
  {
    id: 4,
    question: "Apakah program Institut Purna Bakti berbayar?",
    answer:
      "Ya, program Institut Purna Bakti berbayar. Namun, Institut Purna Bakti memberikan beasiswa bagi lansia yang berprestasi dan kurang mampu.",
  },
  {
    id: 5,
    question: "Bagaimana cara mendaftar Institut Purna Bakti?",
    answer:
      "Untuk mendaftar Institut Purna Bakti, lansia dapat mengisi form pendaftaran di website Institut Purna Bakti.",
  },
  {
    id: 6,
    question:
      "Apakah Institut Purna Bakti membuka program khusus untuk lansia yang ingin berkarir di bidang tertentu?",
    answer:
      "Ya, Institut Purna Bakti membuka program khusus untuk lansia yang ingin berkarir di bidang tertentu. Lansia dapat menghubungi Institut Purna Bakti untuk informasi lebih lanjut.",
  },
  {
    id: 7,
    question:
      "Apakah Institut Purna Bakti membuka program khusus untuk lansia yang ingin berkarir di bidang tertentu?",
    answer:
      "Ya, Institut Purna Bakti membuka program khusus untuk lansia yang ingin berkarir di bidang tertentu. Lansia dapat menghubungi Institut Purna Bakti untuk informasi lebih lanjut.",
  },
];

const SectionAskIPB = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return itemAskIPB.map((item) => (
    <Accordion
      key={item.id}
      i={item.id}
      expanded={expanded}
      setExpanded={setExpanded}
      title={item.question}
    >
      <div className="px-5 py-5 text-left w-full">
        <p className="text-gray-500">{item.answer}</p>
      </div>
    </Accordion>
  ));
};

export default SectionAskIPB;
