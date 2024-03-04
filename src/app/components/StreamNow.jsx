"use client"
import React from 'react'
import SkewButton from './SkewButton'
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const StreamNow = () => {
    const img = "/Assets/scroll3.jpg";

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } }
    };

    return (
        <InView>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <div className='w-4/5 mx-auto my-36 mb-28 flex text-white'>

                        <div className='w-6/12 rounded-3xl bg-slate-500'>
                            <video className='w-full h-full rounded-3xl object-cover ' autoPlay loop muted preload="none">
                                <source src="/images/landing/video-2.mp4" type="video/mp4" />
                                <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className='w-7/12 flex flex-col justify-center bg-slate-40 ps-14'>
                            <p className='float-right text-5xl font-semibold leading-tight'><span className=' text-purple-800'>STREAM</span> AND <span className=' text-purple-800'>PLAY</span> AT THE SAME TIME ON <span className=' text-purple-800'>GAMERLY</span></p>
                            <p className='leading-5 text-lg font-medium mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <SkewButton className="w-48 mt-8 ms-2">STREAM NOW</SkewButton>
                        </div>
                    </div>
                </motion.div>
            )}
        </InView>
    )
}

export default StreamNow