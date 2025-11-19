import React, { useState } from 'react'
import img1 from '../../public/Stock/image1.png'
import img2 from '../../public/Stock/image2.png'
import img3 from '../../public/Stock/image3.png'
import img4 from '../../public/Stock/image4.png'
import Button from './Button'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroImage = ({ src, alt, className, containerClass, title, category }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden cursor-pointer ${containerClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={src} alt={alt} className={className} />

            {/* Inner shadow overlay for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
            />

            {/* Overlay Reveal Effect */}
            <motion.div
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            >
                {/* Category */}
                <motion.p
                    className="text-white/70 text-xs uppercase tracking-widest font-light mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                    }}
                    transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.1 : 0
                    }}
                >
                    {category}
                </motion.p>

                {/* Decorative golden line */}
                <motion.div
                    className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700 mb-3"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                        width: isHovered ? 64 : 0,
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                />

                {/* Title */}
                <motion.h3
                    className="text-white text-xl font-serif font-medium tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                    }}
                    transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.2 : 0
                    }}
                >
                    {title}
                </motion.h3>
            </motion.div>
        </div>
    );
};

const Hero = () => {
    const [hoveredLeft, setHoveredLeft] = useState(false);

    return (
        <div className=' py-20 w-full'>
            <div className='flex gap-4 w-full '>

                {/* left side  */}
                <div
                    className='self-center relative cursor-pointer overflow-hidden'
                    onMouseEnter={() => setHoveredLeft(true)}
                    onMouseLeave={() => setHoveredLeft(false)}
                >
                    <img src={img4} alt="Jewelry showcase" className='h-[500px] object-cover' />
                    {/* Inner shadow overlay for depth */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
                    />

                    {/* Overlay Reveal Effect */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: hoveredLeft ? 1 : 0
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.p
                            className="text-white text-sm uppercase tracking-widest font-light mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: hoveredLeft ? 1 : 0,
                                y: hoveredLeft ? 0 : 10
                            }}
                            transition={{
                                duration: 0.3,
                                delay: hoveredLeft ? 0.1 : 0
                            }}
                        >
                            Explore
                        </motion.p>

                        <motion.div
                            className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{
                                width: hoveredLeft ? 64 : 0,
                                opacity: hoveredLeft ? 1 : 0
                            }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        />
                    </motion.div>
                </div>

                {/*content  */}
                <div className='px-18 py-12 self-center relative'>
                    <h1 className='text-7xl font-medium font-serif tracking-tight text-dark-800'>
                        Elevate Your Everyday With<br /> Timeless Jewels
                    </h1>
                    <p className='my-8'>Handcrafted designs made to shine in every moment.</p>
                    <Button icon={<ArrowUpRight />}>Explore Collections</Button>
                </div>

                {/* right side  */}
                <div className='grid grid-cols-2 grid-rows-[1fr_1fr] gap-4'>
                    <HeroImage
                        src={img2}
                        alt="Jewelry collection"
                        className='row-span-2 h-full w-full object-cover'
                        containerClass='row-span-2'
                        title="Signature Collection"
                        category="Exclusive Designs"
                    />
                    <HeroImage
                        src={img3}
                        alt="Featured jewelry"
                        className='max-h-[280px] h-full w-full object-cover'
                        title="Bridal Elegance"
                        category="Wedding Collection"
                    />
                    <HeroImage
                        src={img1}
                        alt="Premium jewelry"
                        className='max-h-[280px] h-full w-full object-cover'
                        title="Diamond Collection"
                        category="Premium Craftsmanship"
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero