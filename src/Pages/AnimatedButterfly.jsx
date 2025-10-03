// src/components/AnimatedButterfly.js
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// SVG for the butterfly
const ButterflySVG = () => (
    <svg viewBox="0 0 512 512" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M208.6 205.3C208.2 203.2 208 201.1 208 199C208 181.4 220.2 166.5 236 161.7V128C236 119.2 243.2 112 252 112H260C268.8 112 276 119.2 276 128V161.7C291.8 166.5 304 181.4 304 199C304 201.1 303.8 203.2 303.4 205.3C332.1 223.3 352 256.3 352 293.3V344C352 352.8 344.8 360 336 360H296V336C296 327.2 288.8 320 280 320H232C223.2 320 216 327.2 216 336V360H176C167.2 360 160 352.8 160 344V293.3C160 256.3 179.9 223.3 208.6 205.3Z" fill="#FFA500"/>
        <path d="M352 293.3C352 256.3 332.1 223.3 303.4 205.3C308.5 208.2 313.2 211.7 317.5 215.9C369.3 267.7 369.3 352.3 317.5 404.1C313.2 408.3 308.5 411.8 303.4 414.7C332.1 396.7 352 363.7 352 326.7V293.3Z" fill="#FFC107"/>
        <path d="M160 293.3C160 256.3 179.9 223.3 208.6 205.3C203.5 208.2 198.8 211.7 194.5 215.9C142.7 267.7 142.7 352.3 194.5 404.1C198.8 408.3 203.5 411.8 208.6 414.7C179.9 396.7 160 363.7 160 326.7V293.3Z" fill="#FFC107"/>
    </svg>
);

const AnimatedButterfly = () => {
    const { scrollYProgress } = useScroll();

    // The animation happens in the first 25% of the page scroll.
    const inputRange = [0, 0.05, 0.15, 0.25];

    // Butterfly's path (Y-axis)
    const y = useTransform(scrollYProgress, inputRange, [-100, 200, 600, 800]);
    // Butterfly's path (X-axis) - creates a fluttering effect
    const x = useTransform(scrollYProgress, inputRange, ["10vw", "40vw", "10vw", "50vw"]);
    // Butterfly's rotation
    const rotate = useTransform(scrollYProgress, inputRange, [0, 15, -15, 0]);
    // Butterfly's scale - gets smaller as it 'lands'
    const scale = useTransform(scrollYProgress, inputRange, [1.5, 1.2, 1, 0.8]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x,
                y,
                rotate,
                scale,
                zIndex: 50,
            }}
            // Add a subtle flutter animation on the wings
            animate={{
                transform: ['translateY(0px)', 'translateY(-10px)', 'translateY(0px)'],
            }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        >
            <ButterflySVG />
        </motion.div>
    );
};

export default AnimatedButterfly;