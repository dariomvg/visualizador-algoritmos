"use client";
import { useEffect, useState } from "react";
import { content } from "@/utils/content";
import { Step, UseAlgorithmTypes } from "@/types/utils.types";
import { objAlgorithm } from "@/utils/obj_algorithm";
import { objSelected } from "@/utils/obj_selected";

export const useAlgorithm = (name: string | string[]): UseAlgorithmTypes => {
  const [consoleOutput, setConsoleOutput] = useState("");
  const [selected, setSelected] = useState(objSelected);
  const [algorithm, setAlgorithm] = useState(objAlgorithm);

  const executeCode = () => {
    let output = "";
    try {
      const log = (message) => {
        output += message + "\n";
      };
      const func = new Function("console", selected.code);
      func({ log });
      setConsoleOutput(output);
    } catch (error) {
      setConsoleOutput(error.toString());
    }
  };

  const chooseStep = (item: Step) => {
    setSelected(item);
  };

  const saveCode = (value: string) => {
    setSelected({ ...selected, code: value });
  };

  const cleanConsole = () => {
    setConsoleOutput("");
  };

  useEffect(() => {
    if (name) {
      const foundAlgorithm = content.find((item) => item.name == name);
      setAlgorithm(foundAlgorithm);
      setSelected(foundAlgorithm.steps[0]);
    }
  }, [name]);

  return {
    consoleOutput,
    executeCode,
    algorithm,
    selected,
    saveCode,
    cleanConsole,
    chooseStep,
  };
};
