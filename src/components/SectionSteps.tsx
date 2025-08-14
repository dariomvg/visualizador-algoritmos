import "@/styles/section-steps.css";
import { SectionStepsTypes } from "@/types/utils.types";
import { memo } from "react";

function SectionSteps({ steps, selected, chooseStep }: SectionStepsTypes) {
  return (
    <>
      <h4 className="title-steps">Pasos</h4>
      <div className="box-steps">
        {steps &&
          steps.map((item) => (
            <button
              key={item.id}
              className={`step ${selected.id == item.id ? "active-btn" : ""}`}
              onClick={() => chooseStep(item)}>
              {item.id}
            </button>
          ))}
      </div>
    </>
  );
}

export default memo(SectionSteps);
