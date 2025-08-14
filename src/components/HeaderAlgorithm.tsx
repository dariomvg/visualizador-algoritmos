"use client";
import { memo, useState } from "react";
import { SelectAlgorithm } from "./SelectAlgorithm";
import iconRun from "@/assets/play.svg";
import iconRefresh from "@/assets/refresh.svg";
import iconInfo from "@/assets/info.svg";
import { HeaderAlgorithmTypes } from "@/types/utils.types";
import "@/styles/header-algorithm.css";

function HeaderAlgorithm({
  description,
  executeCode,
  cleanConsole,
}: HeaderAlgorithmTypes) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="box-controls">
      <div className="box-devider-controls">
        <SelectAlgorithm />
        <div className="box-info">
          <img
            src={iconInfo.src}
            alt="information"
            width={30}
            height={30}
            loading="lazy"
            className="icon-info"
            title="Información"
            onClick={() => setShowDetails(!showDetails)}
          />
          {showDetails && (
            <div className="box-info-text">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
      <div className="box-devider-controls">
        <button onClick={executeCode} className="run-button">
          Probar
          <img
            src={iconRun.src}
            alt="icon play"
            title="Probar código"
            loading="lazy"
            width={30}
            height={30}
          />
        </button>
        <button onClick={cleanConsole} className="button-refresh">
          <img
            src={iconRefresh.src}
            alt="refresh"
            loading="lazy"
            width={25}
            height={25}
            title="Reiniciar consola"
          />
        </button>
      </div>
    </div>
  );
}

export default memo(HeaderAlgorithm);
