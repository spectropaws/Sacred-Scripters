"use client"
import React from 'react';
import SkewButton from './SkewButton';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const CollectTokens = () => {
    const img = "/Assets/scroll2.jpg";
    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 } }
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
                    <div className='w-4/5 mx-auto my-36 flex text-white'>
                        <div className='w-7/12 flex mr-10 flex-col justify-center'>
                            <p className='float-left text-5xl font-semibold leading-tight'>GET <span className=' text-purple-800'>EXCLUSIVE</span> GAMES  </p>
                            <p className='float-left text-5xl font-semibold leading-tight'>WITH <span className=' text-purple-800'>GAMERLY</span> TOKENS IN <span className=' text-purple-800 '>SHOP</span></p>
                            <p className='leading-5 text-lg font-medium mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <SkewButton className="w-56 mt-8 ms-2">COLLECT TOKENS</SkewButton>
                        </div>

                        <div className='w-6/12 rounded-3xl bg-slate-500'>
                            <video className='w-full h-full rounded-3xl object-cover ' autoPlay loop muted preload="none">
                                <source src="/images/landing/video-1.mp4" type="video/mp4" />
                                <track
                                    src="/path/to/captions.vtt"
                                    kind="subtitles"
                                    srcLang="en"
                                    label="English"
                                />
                                Your browser does not support the video tag.
                            </video>
                            {/* <Image src={img} width={1000} height={1000} className='object-cover bg-slate-500 h-full w-full rounded-3xl' /> */}
                        </div>
                    </div>
                </motion.div>
            )}
        </InView>
    );
};

export default CollectTokens;
