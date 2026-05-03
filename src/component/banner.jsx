"use client";
import { motion } from "framer-motion";
import { Button, Image } from "@heroui/react";

export default function Hero() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          {/* Main heading updated for Design School */}
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            Welcome to <br />
            <span className="text-orange-600">DESIGN SCHOOL</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Master the art of visual storytelling and modern design with industry experts.
          </p>
          <Button color="warning" size="lg" className="w-fit font-bold text-white bg-orange-500">
            Start Learning
          </Button>
        </motion.div>

        <div className="flex justify-center">
          <Image 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766" 
            alt="Design School Studio" 
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}