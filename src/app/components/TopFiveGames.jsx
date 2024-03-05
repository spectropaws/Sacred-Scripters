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
            heading: "BULLET FORCE ",
            imageURL: '/images/landing/poster-2.jpg',
            description: "Experience intense multiplayer FPS action with customizable weapons, dynamic maps, and thrilling gameplay. Join the battle, dominate the competition, and become the ultimate soldier in this adrenaline-fueled shooter.",
            rating: 4,
        },
        {
            heading: "INFINITE BATTLE",
            imageURL: '/images/landing/poster-3.jpg',
            description: "Immerse yourself in a futuristic world of epic battles and strategic warfare. Command powerful armies, conquer new territories, and unleash advanced technologies to dominate your opponents. With immersive graphics and dynamic gameplay, prepare for an unforgettable gaming experience in the ultimate battle for supremacy.",
            rating: 5,
        },
        {
            heading: "ARCADE RACING",
            imageURL: '/images/landing/poster-4.jpg',
            description: "Arcade racing games are all about fast-paced action, emphasizing speed, agility, and pure fun. Unlike realistic racing simulators, these games prioritize excitement and thrilling gameplay.",
            rating: 3,
        },
        {
            heading: "TURN MY WHEEL",
            imageURL: '/images/landing/poster-5.jpg',
            description: "Embark on an addictive journey of precision and timing as you navigate through challenging obstacles. Test your reflexes and skills as you twist and turn your way to victory. With captivating visuals and addictive gameplay, Turn My Wheel offers a thrilling experience that will keep you coming back for more.",
            rating: 4,
        },
        {
            heading: "VENGE IO",
            imageURL: '/images/landing/poster-6.jpg',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at vel eaque temporibus dicta perferendis repellendus, corrupti vero maxime quam minima laudantium voluptatum totam ex optio porro libero suscipit",
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