import { DefaultProps } from "@/data/utils/default-props";









export default function LayoutDiv({className, children}: DefaultProps) {
    return (
        <div className={`h-full flex w-full items-center justify-center ${className}`}>
            {children}
        </div>
    )
}