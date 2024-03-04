"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import SkewButton from './SkewButton'
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const TopFiveGames = () => {

    const slideInY = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.2 } }
    };
    const slideInX = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay:0.2} }
    };

    const topFiveGames = [
        {
            heading: "demo game-1",
            imageURL: '/images/landing/poster-2.jpg',
            description: "game-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
            rating: 4,
        },
        {
            heading: "demo game-2",
            imageURL: '/images/landing/poster-3.jpg',
            description: "game-2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
            rating: 5,
        },
        {
            heading: "demo game-3",
            imageURL: '/images/landing/poster-4.jpg',
            description: "game-3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
            rating: 5,
        },
        {
            heading: "demo game-4",
            imageURL: '/images/landing/poster-5.jpg',
            description: "game-4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
            rating: 4,
        },
        {
            heading: "demo game-5",
            imageURL: '/images/landing/poster-6.jpg',
            description: "game-5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
            rating: 5,
        },
    ]

    let [componentValue, setComponentValue] = useState(1);
    let [activeIndex, setActiveIndex] = useState(0);

    function generateStars(rating) {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push("⭐️");
        }
        return stars;
    }

    const handleOnClick = (idx) => {
        setComponentValue(idx + 1)
        setActiveIndex(idx)
    }


    return (
        <InView>
            {({ inView, ref }) => (
                <div className='w-5/6 mx-auto flex text-white' style={{ height: '600px' }}>
                    <motion.div
                        ref={ref}
                        variants={slideInX}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className='w-5/12 mx-6 py-10 ps-10'>
                        <div className='mb-10'>
                            <p className='text-5xl font-semibold'>TOP GAMES ONLY ON <span className='text-purple-800'>GAMERLY</span></p>
                        </div>
                        <div>
                            <div>
                                <p className='text-2xl leading-10 font-semibold'>
                                    {topFiveGames[componentValue - 1].heading}
                                </p>
                                <p className='leading-5 '>{topFiveGames[componentValue - 1].description}</p>
                                <p className='text-sm mt-4 mb-3'>
                                    RATING {generateStars(topFiveGames[componentValue - 1].rating)}
                                </p>
                            </div>
                        </div>
                        <div className='flex'>
                            <SkewButton className={"w-44"}>PLAY NOW</SkewButton>
                            <SkewButton className={"w-44 mx-4"}>STREAM NOW</SkewButton>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        variants={slideInY}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className='w-4/12'>
                        <div className={`flex h-full`}>
                            <Image className={`mx-auto my-auto h-4/6 w-11/12 rounded-full object-cover`} src={topFiveGames[componentValue - 1].imageURL} height={2000} width={2000} alt='Game Image' />
                        </div>
                    </motion.div>

                    <div className='w-2/12 p-10'>
                        <div className='flex flex-col'>
                            {topFiveGames.map((game, idx) => (
                                <div onClick={() => handleOnClick(idx)} key={idx} className={`cursor-pointer mx-auto my-2`}>
                                    <Image className={`${activeIndex == idx && 'shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]'} hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.6)] h-20 w-20 rounded-full object-cover`} src={game.imageURL} height={1000} width={1000} alt='Game Image' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </InView>
    )
}

export default TopFiveGames;