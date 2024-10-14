import { AsideNav } from "@/components/AsideNav";

export default function LayoutAlgorithm ({children}) {
    return (
        <section>
            <AsideNav />
            {children}
        </section>
    )
}
