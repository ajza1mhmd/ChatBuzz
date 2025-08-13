import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Welcome({ auth }) {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <>
            <Head title="Welcome" />

            <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
                
                {/* Navigation */}
                <nav className="w-full py-6 shadow-md dark:shadow-gray-700">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                            <img
                                src="/assets/images/ChatBuzzLogo-4.png"
                                alt="ChatBuzz Logo"
                                className="h-10 w-10"
                                draggable="false"
                            />
                            <span>ChatBuzz</span>
                        </div>

                        {/* Dark/Light Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? (
                                <svg
                                    className="h-6 w-6 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.71.71a1 1 0 11-1.42 1.42l-.71-.71a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.22 5.78a1 1 0 010-1.42l.71-.71a1 1 0 011.42 1.42l-.71.71a1 1 0 01-1.42 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm5.78-2.22a1 1 0 010 1.42l-.71.71a1 1 0 11-1.42-1.42l.71-.71a1 1 0 011.42 0zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.22-5.78a1 1 0 011.42 0l.71.71a1 1 0 11-1.42 1.42l-.71-.71a1 1 0 010-1.42z" />
                                    <path d="M10 6a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6 text-gray-800"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M17.293 13.293A8 8 0 116.707 2.707a8.001 8.001 0 0010.586 10.586z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="flex-grow flex items-center justify-center">
                    <section className="text-center max-w-4xl px-6 py-12 md:py-20">
                        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border bg-white/80 dark:bg-gray-800/80 text-sm text-gray-900 dark:text-gray-200 shadow-md backdrop-blur">
                            <span className="mr-2 relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            5+ New Features Available
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                            Chat Reimagined
                        </h1>

                        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-slate-500 to-gray-500 bg-clip-text dark:from-white dark:via-gray-400 dark:to-gray-300">
                            Powered by the Cloud. Inspired by the Best.
                        </h2>

                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                            Experience seamless conversations with real-time messaging, file sharing, and cloud-backed reliability — all in one powerful app.
                        </p>

                        <div className="mt-6 flex justify-center gap-4 flex-wrap">
                            <button className="px-6 py-3 rounded-xl shadow text-white font-semibold flex items-center gap-2 transition-all duration-300 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-600">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                                </svg>
                                Instant Messaging
                            </button>

                            <button className="px-6 py-3 rounded-xl shadow font-semibold flex items-center gap-2 transition-all duration-300 bg-white text-cyan-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-cyan-400 dark:hover:bg-gray-700">
                                <svg
                                    className="w-5 h-5 text-cyan-700 dark:text-cyan-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 15a4 4 0 014-4h1a1 1 0 010 2H7a2 2 0 000 4h10a4 4 0 000-8h-.26A8 8 0 103 15z" />
                                </svg>
                                Smart Cloud Storage
                            </button>
                        </div>

                        <div className="mt-16 flex justify-center gap-4 flex-wrap">
                            <Link
                                href={route('register')}
                                className="px-6 py-3 rounded-xl shadow text-white font-semibold bg-gray-900 dark:bg-gray-200 dark:text-gray-900 transition duration-150 ease-in-out hover:bg-gray-800 dark:hover:bg-gray-300"
                            >
                                Sign Up
                            </Link>
                            <Link
                                href={route('login')}
                                className="px-6 py-3 rounded-xl shadow font-semibold bg-white dark:bg-gray-800 dark:text-gray-200 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Sign In
                            </Link>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} ChatBuzz. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
