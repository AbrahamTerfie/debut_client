import { motion } from 'framer-motion'
import React from 'react'

export default function MotionContainer({ children }: any) {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ cursor: 'pointer' }}
            >
                {children}
            </motion.div>
        </div>
    )
}
