import React, { useState, useEffect } from 'react'
import img1 from '../../public/Stock/image1.png'
import img2 from '../../public/Stock/image2.png'
import img3 from '../../public/Stock/image3.png'
import img4 from '../../public/Stock/image4.png'
import Button from './Button'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroImage = ({ src, alt, className, containerClass, title, category, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={`relative overflow-hidden cursor-pointer ${containerClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.img
                src={src}
                alt={alt}
                className={className}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

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
                    className="text-white text-xl font-serif font-medium tracking-wide text-center"
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
        </motion.div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax effect for background elements
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div className='relative py-20 w-full overflow-hidden'>
            <div className='flex gap-4 w-full'>
                {/* left side image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className='self-center relative overflow-hidden'
                >
                    <img
                        src={'https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpld2Vscnl8ZW58MHwxfDB8fHwx'}
                        alt="Jewelry showcase"
                        className='h-[500px] object-cover'
                    />

                    {/* Inner shadow overlay for depth */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
                    />
                </motion.div>

                {/* content section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className='px-18 py-12 self-center relative'
                >
                    {/* Decorative element above title */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 mb-6"
                    />

                    <motion.h1
                        className='text-7xl font-medium font-serif tracking-tight text-dark-800'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Elevate Your Everyday With<br /> Timeless Jewels
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className='my-8 text-base text-gray-600'
                    >
                        Handcrafted designs made to shine in every moment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Button icon={<ArrowUpRight />}>Explore Collections</Button>
                    </motion.div>
                </motion.div>

                {/* right side grid */}
                <div className='grid grid-cols-2 grid-rows-[1fr_1fr] gap-4'>
                    <HeroImage
                        src={'https://plus.unsplash.com/premium_photo-1670615931324-2542d17dc3ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp3ZWxsZXJ5JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDE%3D'}
                        alt="Jewelry collection"
                        className='row-span-2 h-full w-full object-cover'
                        containerClass='row-span-2'
                        title="Signature Collection"
                        category="Exclusive Designs"
                        delay={0.4}
                    />
                    <HeroImage
                        src={'https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyaWRlJTIwandlbGxlcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MQ%3D%3D'}
                        alt="Featured jewelry"
                        className='max-h-[280px] h-full w-full object-cover'
                        title="Bridal Elegance"
                        category="Wedding Collection"
                        delay={0.6}
                    />
                    <HeroImage
                        src={'https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fERpYW1vbmQlMjBqd2VsbGVyeSUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHwx'}
                        alt="Premium jewelry"
                        className='max-h-[280px] h-full w-full object-cover'
                        title="Diamond Collection"
                        category="Premium Craftsmanship"
                        delay={0.8}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero