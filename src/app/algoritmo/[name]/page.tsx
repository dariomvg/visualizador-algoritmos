"use client";
import "./algorithm.css";
import Editor from "@monaco-editor/react";
import iconRun from "../../../assets/play.svg";
import iconRefresh from "../../../assets/refresh.svg";
import iconInfo from "../../../assets/info.svg";
import { useAlgorithm } from "@/hooks/useAlgorithm";
import { ParamsPageAlgorithm } from "@/types/utils.types";

export default function PageAlgorithm({ params }: ParamsPageAlgorithm) {
  const {
    executeCode,
    consoleOutput,
    setConsoleOutput,
    algorithm,
    selected,
    setSelected,
    saveCode,
    viewDesc,
    setViewDesc,
  } = useAlgorithm(params.name);

  return (
    <section className="page-algorithm">
      <section className="section-targets">
        <section className="target-graphic">
          <div className="box-controls">
            <div className="box-info">
              <img
                src={iconInfo.src}
                alt="information"
                width={30}
                height={30}
                className="icon-info"
                title="Información"
                onClick={() => setViewDesc(!viewDesc)}
              />
              {viewDesc && (
                <div className="box-info-text">
                  <p>{algorithm && algorithm.description}</p>
                </div>
              )}
            </div>
            <button onClick={executeCode} className="run-button">
              Probar
              <img
                src={iconRun.src}
                alt="run"
                title="run"
                width={30}
                height={30}
              />
            </button>
            <button
              onClick={() => setConsoleOutput("")}
              className="button-refresh">
              <img
                src={iconRefresh.src}
                alt="refresh"
                width={25}
                height={25}
                title="Reiniciar consola"
              />
            </button>
          </div>

          <h4 className="title-steps">Pasos</h4>
          <div className="box-steps">
            {algorithm.steps &&
              algorithm.steps.map((item) => (
                <button
                  key={item.id}
                  className={`step ${
                    selected.id == item.id ? "active-btn" : ""
                  }`}
                  onClick={() => setSelected(item)}>
                  {item.id}
                </button>
              ))}
          </div>
          <div className="box-details">
            <p className="detail">{algorithm && selected.details}</p>
          </div>
          <section className="target-console">
            <h4>Consola</h4>
            <pre>{consoleOutput}</pre>
          </section>
        </section>
        <section className="target-editor">
          <Editor
            height="100vh"
            defaultLanguage="javascript"
            value={selected.code}
            theme="vs-dark"
            onChange={(value) => saveCode(value)}
          />
        </section>
      </section>
    </section>
  );
}
