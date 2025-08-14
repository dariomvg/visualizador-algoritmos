export interface FeaturesTypes {
  id: number;
  title: string;
  details: string;
}

export type Step = {
  id: number | null;
  details: string;
  code: string;
};

export interface ContentTypes {
  id: number | null;
  name: string;
  description: string;
  steps: Step[];
}

export interface UseAlgorithmTypes {
  consoleOutput: string;
  executeCode: () => void;
  algorithm: ContentTypes;
  selected: Step;
  saveCode: (value: string) => void;
  cleanConsole: () => void;
  chooseStep: (item: Step) => void;
}

export interface AlgorithmsTypes {
  id: number;
  title: string;
  description: string;
  link: string;
}

export interface HeaderAlgorithmTypes {
  description: string;
  executeCode: () => void;
  cleanConsole: () => void;
}

export interface SectionStepsTypes {
  steps: Step[];    
    selected: Step;
    chooseStep: (item: Step) => void;
}