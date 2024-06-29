import { DefaultProps } from "@/data/utils/default-props";









export default function LayoutSection({className, children}: DefaultProps) {
    return (
        <div className={`h-full flex w-full items-center justify-center overflow-hidden ${className}`}>
            {children}
        </div>
    )
}