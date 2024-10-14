"use client";
import { useEffect, useState } from "react";
import { content } from "@/utils/content";

 
export const useAlgorithm = (name) => {
  const [consoleOutput, setConsoleOutput] = useState("");
  const [selected, setSelected] = useState({}); 
  const [algorithm, setAlgorithm] = useState({}); 
  const [viewDesc, setViewDesc] = useState(false); 

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

  const saveCode = (value) => {
    setSelected({...selected, code: value})
  }

  useEffect(() => {
    if(name) {
      const foundAlgorithm = content.find((item) => item.name == name); 
      setAlgorithm(foundAlgorithm); 
      setSelected(foundAlgorithm.steps[0])
    }
  }, [name])
  
  return { consoleOutput, executeCode, algorithm, setConsoleOutput, selected, setSelected, saveCode, viewDesc, setViewDesc}
}
