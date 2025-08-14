"use client";
import "../styles/select-algorithm.css";
import { algorithms } from "@/utils/algorithms";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const SelectAlgorithm = () => {
  const router = useRouter();
  const ref = useRef(null);
  const changeAlgorithm = () => {
    if (!ref.current.value) return;
    router.push(`/algoritmo/${ref.current.value}`);
    ref.current.value = "";
  };

  return (
    <select className="select-algorithm" onChange={changeAlgorithm} ref={ref}>
      <option value="">Algoritmos</option>
      {algorithms.map(({ id, title, link }) => (
        <option key={id} value={link}>
          {title}
        </option>
      ))}
    </select>
  );
};
