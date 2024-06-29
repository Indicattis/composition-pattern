
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

interface DefaultButtonProps {
    variant: "submit" | "filled"
    type?: "submit" | "reset" | "button",
    children: React.ReactNode,
    onClick?: () => void,
    wide?: "sm" | "lg" | "md" | "xl" | "full",
    rounded?: "sm" | "lg" | "md" | "xl" | "full",
    theme?: string
}


  
export default function DefaultButton({children, variant, onClick, type, wide, rounded, theme}: DefaultButtonProps) {
    const [light, setLight] = useState("");


    return (
        <motion.div 
        whileTap={{ scale: 0.95 }}
        animate={{borderColor: variant == "submit" ? light : "#ffffff"}}
        transition={{ borderColor: {duration: 0.5} }} // Define a duração da animação
        className={`
           
            px-[2px] py-[2px]
            ${rounded == "sm" ? "rounded-sm" : ""}
            ${rounded == "md" ? "rounded-md" : ""}
            ${rounded == "lg" ? "rounded-lg" : ""}
            ${rounded == "full" ? "rounded-full" : ""}

            ${wide == "sm" ? "h-8 _text _small" : ""}
            ${wide == "md" ? "h-10 _text _small" : ""}
            ${wide == "lg" ? "h-14 _text" : ""}
            ${wide == "xl" ? "h-16 _display_text" : ""}
            ${wide == "full" ? "h-20 w-20 _display_text " : ""}
            `}>
            <motion.button
            animate={{color: variant == "submit" ? light : "#ffffff"}}
            transition={{ duration: 1 }} type={type} onClick={onClick} className={`
                ${rounded == "sm" ? "rounded-sm" : ""}
                ${rounded == "md" ? "rounded-md" : ""}
                ${rounded == "lg" ? "rounded-lg" : ""}
                ${rounded == "full" ? "rounded-full" : ""}
                flex justify-center items-center gap-2 w-full h-full
                shadow-md
                ${wide == "sm" ? "px-1  font-thin" : ""}
                ${wide == "md" ? "px-3  font-medium" : ""}
                ${wide == "lg" ? "px-5  font-semibold tracking-tight" : ""}
                ${wide == "xl" ? "px-8  font-bold" : ""}
                ${wide == "full" ? "_full  font-black" : ""}
                `}>
                {children}
            </motion.button>
        </motion.div>
    )
}