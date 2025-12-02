"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, Calendar, X } from "lucide-react";
import Image from "next/image";

interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    certificateImage: string;
    link: string;
}

const certificates = [
    {
        id: 1,
        title: "Samsung Innovation Campus Internship",
        issuer: "Samsung Innovation Campus",
        date: "2025",
        description:
            "Completed intensive training in Artificial Intelligence, covering Machine Learning, Deep Learning, and real-world AI modeling. Developed a Product Demand Forecasting system using time-series analysis and predictive modeling to accurately estimate future product demand and support data-driven decision making.",
        image: "/samsung.jpg",
        certificateImage: "/samsung.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "LaunchED Global Internship",
        issuer: "LaunchED Global",
        date: "2025",
        description:
            "Developed decentralized Web3 applications using core blockchain technologies including smart contracts (Solidity), Ethereum Virtual Machine (EVM), MetaMask integration, and IPFS for secure data storage. Built a blockchain-powered Supply Chain Tracker application enabling transparent product tracking across stakeholders with immutable records, real-time status updates, and tamper-proof verification. Implemented Node.js and Express backend services, React-based frontend UI, and Web3.js/Ethers.js for blockchain communication.",
        image: "/launched.png",
        certificateImage: "/launched.png",
        link: "#",
    },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);


    return (
        <section className="w-full py-20 transition-colors duration-300">
            <div className="max-w-[50rem] mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Certifications
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Professional credentials and achievements
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300
                            bg-white border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1
                            dark:bg-slate-900/50 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:shadow-blue-900/10"
                        >
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium
                                    bg-blue-50 text-blue-700 ring-1 ring-blue-700/10
                                    dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800">
                                        {cert.issuer}
                                    </span>

                                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {cert.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                    {cert.title}
                                </h3>

                                <p className="text-sm line-clamp-2 mb-6 text-gray-600 dark:text-gray-400">
                                    {cert.description}
                                </p>

                                <button
                                    onClick={() => setSelectedCert(cert)}
                                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                                >
                                    Show Credential
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-6 w-[95%] max-w-lg shadow-xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
                                onClick={() => setSelectedCert(null)}
                            >
                                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            </button>

                            {/* Certificate Image */}
                            <div className="relative w-full h-60 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-slate-800">
                                <Image
                                    src={selectedCert.certificateImage}
                                    // src={selectedCert.certificateImage}
                                    alt="Certificate"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {selectedCert.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                <strong>Issuer:</strong> {selectedCert.issuer}
                                <br />
                                <strong>Date:</strong> {selectedCert.date}
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {selectedCert.description}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
