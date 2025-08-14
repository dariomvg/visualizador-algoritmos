"use client";
import "./algorithm.css";
import { useAlgorithm } from "@/hooks/useAlgorithm";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Loader } from "@/components/Loader";

const SectionSteps = dynamic(() => import("@/components/SectionSteps"), {
  ssr: false,
  loading: () => <Loader />,
});

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <Loader />,
});

const HeaderAlgorithm = dynamic(() => import("@/components/HeaderAlgorithm"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function PageAlgorithm() {
  const { name } = useParams();
  if (!name) return;

  const {
    executeCode,
    selected,
    consoleOutput,
    algorithm,
    saveCode,
    cleanConsole,
    chooseStep,
  } = useAlgorithm(name);

  return (
    <section className="page-algorithm">
      <section className="section-targets">
        <section className="target-graphic">
          <HeaderAlgorithm
            description={algorithm.description}
            executeCode={executeCode}
            cleanConsole={cleanConsole}
          />
          <SectionSteps
            chooseStep={chooseStep}
            selected={selected}
            steps={algorithm.steps}
          />
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
