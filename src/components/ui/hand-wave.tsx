"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HandWave(){
    return <motion.div
        animate={{ 
            transform: ['rotate(-10deg)', 'rotate(0deg)', 'rotate(30deg)', 'rotate(0deg)', 'rotate(-10deg)'],
            transformOrigin: ['90% 90%', '90% 90%', '90% 90%', '90% 90%', '90% 90%']
        }}
        transition={{ 
            duration: 0.7,
            repeat: Infinity,
            ease: 'easeInOut'
        }}
        className='inline-block text-6xl'
    >
        <Image src="/waving-hand.svg" alt="waving hand" height={50} width={50}/>
    </motion.div>
}