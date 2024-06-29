import { DefaultProps } from "@/data/utils/default-props";







export default function LayoutMain({children, className}: DefaultProps) {
    return (
        <main className={`max-w-[1080px] py-3 !px-5 flex flex-col w-full `+ className}>
            {children}
        </main>
    )
}