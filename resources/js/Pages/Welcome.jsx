import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen">
                    {/* Navigation */}
                    <nav className="w-full py-6 relative z-10">
                        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-2 text-xl font-bold text-neutral-800 dark:text-neutral-200">
                                <img
                                    src="/assets/images/ChatBuzzLogo-4.png"
                                    alt="ChatBuzz Logo"
                                    className="h-10 w-10"
                                    draggable="false"
                                />
                                <span>ChatBuzz</span>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    aria-label="Twitter"
                                >
                                    <svg className="h-6 w-6 text-neutral-800 dark:text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                    aria-label="GitHub"
                                >
                                    <svg className="h-6 w-6 text-neutral-800 dark:text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* Hero Section */}
                    <section className="py-12 md:py-20 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border bg-white/80 text-sm text-gray-900 shadow-md backdrop-blur">
                                <span className="mr-2 relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                5+ New Features Available
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
                                Chat Reimagined
                            </h1>
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-clip-text dark:from-white dark:via-gray-400 dark:to-gray-300">
                                Powered by the Cloud. Inspired by the Best.
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                                Experience seamless conversations with real-time messaging, file sharing, and cloud-backed reliability — all in one powerful app.
                            </p>

                            <div className="mt-8 flex justify-center gap-4">
                                <button className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-5 py-3 rounded-xl shadow backdrop-blur hover:bg-gray-50">
                                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                    </svg>
                                    <span className="text-sm font-semibold">Copy CSS</span>
                                </button>
                                <button className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-5 py-3 rounded-xl shadow backdrop-blur hover:bg-gray-50">
                                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                    </svg>
                                    <span className="text-sm font-semibold">Copy CSS</span>
                                </button>
                            </div>

                            <div className="mt-16 flex justify-center gap-4">
                                <button className="px-6 py-3 rounded-xl shadow text-white font-semibold" style={{ backgroundColor: '#0c142c' }}>
                                    Sign Up
                                </button>
                                <button className="px-6 py-3 rounded-xl shadow font-semibold" style={{ backgroundColor: '#ffffff', color: '#0c142c' }}>
                                    Sign In
                                </button>
                            </div>

                            <div className="mt-20 mb-6 flex justify-center">
                                <hr className="border-t-2 border-gray-300 w-[220px]" />
                            </div>

                            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">
                                &copy; {new Date().getFullYear()} ChatBuzz. All rights reserved.
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}