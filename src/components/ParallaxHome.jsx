import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

function ParallaxHome() {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (

        <div
            ref={ref}
            className="main"
        >
            <motion.h1
                style={{ y: textY }}
                className="paral"
            >
                <h1>MOUNTAINS</h1>
            </motion.h1>
            <motion.div
                className="background"
                style={{
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="background2"
                style={{
                    
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    )
}

export default ParallaxHome