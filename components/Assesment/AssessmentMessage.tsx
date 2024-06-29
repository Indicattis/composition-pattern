
import { motion } from "framer-motion"

interface AssessmentMessageProps {
    message: string
}

export default function AssessmentMessage( { message }: AssessmentMessageProps) {
    return (
        
        <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: "100%", height: "100%" }}
        transition={{ delay: .2 }}
        className='p-2 bg-contrast_color_2 rounded-b-lg rounded-tr-lg'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="_text font-thin">&quot;{message}&quot;
        </motion.p>
      </motion.div>
    )
}