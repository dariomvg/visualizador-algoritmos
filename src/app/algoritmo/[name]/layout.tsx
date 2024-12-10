import { AsideNav } from "@/components/AsideNav";
import { ChildrenAlgorithm } from "@/types/utils.types";

export default function LayoutAlgorithm ({children}: ChildrenAlgorithm) {
    return (
        <section>
            <AsideNav />
            {children}
        </section>
    )
}
