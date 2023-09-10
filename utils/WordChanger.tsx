'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WordChangerProps {
    words: string[]
}

const WordChanger = ({ words }: WordChangerProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span className=''>
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {words[currentWordIndex]}
            </motion.h1>
        </span>
    );
};

export default WordChanger;