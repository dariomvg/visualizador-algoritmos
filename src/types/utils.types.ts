import { Dispatch, ReactNode, SetStateAction } from "react";

export interface FeaturesTypes {
    id: number; 
    title: string; 
    details: string;
}

type Step = {
    id: number | null; 
    details: string; 
    code: string; 
}

export interface ContentTypes {
    id: number | null; 
    name: string; 
    description: string;
    steps: Step[]
}

export interface UseAlgorithmTypes {
    consoleOutput: string ;
    executeCode: () => void; 
    algorithm: ContentTypes; 
    setConsoleOutput: Dispatch<SetStateAction<string>>; 
    selected: Step; 
    setSelected:Dispatch<SetStateAction<{ id: any; details: string; code: string; }>>;
    saveCode: (value: string) => void; 
    viewDesc: boolean;
    setViewDesc: Dispatch<SetStateAction<boolean>>;
}

export interface AlgorithmsTypes {
    id: number; 
    title: string; 
    description: string; 
    link: string; 
}

export interface ChildrenAlgorithm {
    children: ReactNode
}

export interface ParamsPageAlgorithm {
    params: {name: string}
}
