import { MdUploadFile, MdPlayCircleFilled, MdStar, MdCheckCircle, MdFlashOn, MdPhoto, MdAttachFile, MdAutoAwesome, MdCompareArrows } from 'react-icons/md';

function Home() {
    return (
        <div>
            <main className="relative min-h-screen bg-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 lg:pt-30 pb-20">
                    <div className="max-w-5xl mx-auto text-center">

                        <h1 className="fade-in-up delay-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                            Enhance Your Photos
                            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Instantly with AI</span>
                        </h1>

                        <p className="fade-in-up delay-3 text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                            Transform blurry, low-quality images into sharp, high-definition photos in seconds. No design skills needed.
                        </p>

                        <div className="fade-in-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
                            <label htmlFor="heroUpload" className="group relative w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
                                <MdUploadFile className="text-xl" />
                                <span>Upload Image</span>
                                <input id="heroUpload" type="file" accept="image/*" className="hidden" onChange={(e) => console.log(e.target.files)} />
                            </label>
                            <a href="#showcase" className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 font-medium text-base hover:shadow-lg">
                                <MdPlayCircleFilled className="text-xl" />
                                <span>Try Demo</span>
                            </a>
                        </div>

                        <div className="fade-in-up delay-4 max-w-2xl mx-auto mb-16">
                            <div id="dropZone" className="drop-zone border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-blue-400 hover:bg-blue-50/40 transition-all duration-300 cursor-pointer relative">
                                <div id="dropContent">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                        <MdPhoto className="text-3xl text-blue-500" />
                                    </div>
                                    <p className="text-gray-700 font-semibold text-lg mb-1">Drag & drop your image here</p>
                                    <p className="text-gray-500 text-sm mb-4">or click to browse — PNG, JPG, WEBP up to 20MB</p>
                                    <label htmlFor="dropInput" className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-800 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition cursor-pointer shadow-sm">
                                        <MdAttachFile className="text-lg rotate-45" />
                                        <span>Choose File</span>
                                    </label>
                                    <input id="dropInput" type="file" accept="image/*" className="hidden" onChange={(e) => console.log(e.target.files)} />
                                </div>
                                <div id="previewArea" className="hidden">
                                    <img id="previewImg" src="" alt="Preview" className="max-h-64 mx-auto rounded-xl object-contain mb-4" />
                                    <p className="text-sm text-gray-500 mb-3" id="previewName"></p>
                                    <button onClick={() => {}} className="text-xs text-red-500 hover:text-red-700 transition underline">Remove</button>
                                    <button className="ml-4 bg-black text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 transition font-medium">Enhance Now →</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                                <MdStar className="text-xl text-yellow-500" />
                                <span>4.9/5 user rating</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdCheckCircle className="text-xl text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdFlashOn className="text-xl text-blue-500" />
                                <span>10,000+ images enhanced</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by creators worldwide</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">10K+</span>
                                <div className="text-sm text-gray-600 mt-1 font-medium">Images Enhanced</div>
                            </div>
                            <div className="text-center group">
                                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">4.9★</span>
                                <div className="text-sm text-gray-600 mt-1 font-medium">Average Rating</div>
                            </div>
                            <div className="text-center group">
                                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">5K+</span>
                                <div className="text-sm text-gray-600 mt-1 font-medium">Active Users</div>
                            </div>
                            <div className="text-center group">
                                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">2s</span>
                                <div className="text-sm text-gray-600 mt-1 font-medium">Avg. Enhance Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="showcase" className="py-20 sm:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                See the
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">difference</span>
                            </h2>
                            <p className="text-gray-600 text-lg">Drag the slider to compare before and after AI enhancement.</p>
                        </div>

                        <div className="slider-container w-full max-w-3xl mx-auto shadow-2xl border border-gray-200" id="sliderContainer" style={{ height: "420px" }}>
                            <div className="slider-before w-full h-full">
                                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=30&blur=5" alt="Before" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(1.5px) grayscale(40%) brightness(0.85)" }} />
                            </div>
                            <div className="slider-after" id="sliderAfter">
                                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=90" alt="After" style={{ position: "absolute", top: "0", left: "0", width: "200%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="slider-handle" id="sliderHandle">
                                <div className="slider-handle-icon">
                                    <MdCompareArrows className="text-xl text-primary rotate-90 sm:rotate-0" />
                                </div>
                            </div>
                            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">BEFORE</span>
                            <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">AFTER · AI Enhanced</span>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-5">← Drag to compare →</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

