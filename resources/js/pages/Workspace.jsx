import { useState, useRef } from 'react';
import { 
    MdCloudUpload, 
    MdAdd, 
    MdEdit, 
    MdDelete, 
    MdTune, 
    MdExpandMore, 
    MdLayers, 
    MdImage, 
    MdPhotoLibrary, 
    MdAutoAwesome, 
    MdSync,
    MdVisibility,
    MdFileDownload,
    MdCheckCircle
} from 'react-icons/md';

function Workspace() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [quality, setQuality] = useState('Auto');
    const [format, setFormat] = useState('PNG');
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const sliderRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        const maxSize = 5 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            alert('Please upload a valid image format (JPG, JPEG, PNG, or WEBP).');
            return;
        }

        if (file.size > maxSize) {
            alert('File size exceeds 5MB limit.');
            return;
        }

        // Map mime type to format
        const typeMap = {
            'image/jpeg': 'JPEG',
            'image/jpg': 'JPG',
            'image/png': 'PNG',
            'image/webp': 'WEBP'
        };
        setFormat(typeMap[file.type] || 'PNG');

        const previewUrl = URL.createObjectURL(file);
        setSelectedFile({
            file,
            previewUrl,
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
        });
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleClear = () => {
        if (selectedFile?.previewUrl) {
            URL.revokeObjectURL(selectedFile.previewUrl);
        }
        if (enhancedImage?.url) {
            URL.revokeObjectURL(enhancedImage.url);
        }
        setSelectedFile(null);
        setEnhancedImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleEnhance = async () => {
        if (!selectedFile) return;

        setIsEnhancing(true);
        const formData = new FormData();
        formData.append('file', selectedFile.file);

        try {
            const response = await fetch('http://127.0.0.1:8008/enhance', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to enhance image');
            }

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setEnhancedImage({
                url,
                blob
            });
        } catch (error) {
            console.error('Error enhancing image:', error);
            alert('Error enhancing image. Please try again.');
        } finally {
            setIsEnhancing(false);
        }
    };

    const handleDownload = () => {
        if (!enhancedImage) return;
        const link = document.createElement('a');
        link.href = enhancedImage.url;
        link.download = `enhanced_${selectedFile.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSliderMove = (e) => {
        if (!isDragging && e.type !== 'touchmove') return;
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
        <main className="flex-1 flex flex-col lg:flex-row lg:overflow-hidden">

            <section className="flex-1 flex flex-col p-4 sm:p-8 lg:overflow-y-auto custom-scrollbar">
                <div className="max-w-4xl w-full mx-auto space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Upload your image</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Enhance your photo into an 4k clarity.</p>
                    </div>

                    <div className="relative group">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.webp"
                            className="hidden"
                        />
                        {!selectedFile ? (
                            <div
                                onClick={handleBrowseClick}
                                className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-white/50 dark:bg-slate-900/30 p-8 sm:p-16 transition-all cursor-pointer hover:border-primary hover:bg-primary/5">
                                <div
                                    className="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <MdCloudUpload className="text-primary text-4xl" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-center">Drag and drop your image here</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 text-center max-w-sm">Supported formats JPG, JPEG, PNG, WEBP. Maximum file size 5MB per image.</p>
                                <button
                                    className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
                                    <MdAdd className="text-xl" />
                                    Browse Photo
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-between mb-4 bg-white/30 dark:bg-slate-900/30 p-2 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                                    <div className="flex items-center gap-3 px-2">
                                        <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-inner">
                                            <MdImage className="text-primary text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Source Image</p>
                                            <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate max-w-[120px] sm:max-w-[250px]">{selectedFile.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleBrowseClick}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                                            title="Change Photo">
                                            <MdEdit className="text-base" />
                                            <span className="hidden sm:inline">Change Photo</span>
                                        </button>
                                        <button
                                            onClick={handleClear}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white shadow-sm border border-slate-200 dark:border-slate-700"
                                            title="Remove Photo">
                                            <MdDelete className="text-base" />
                                            <span className="hidden sm:inline">Remove</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-primary/20 group shadow-2xl">
                                    {enhancedImage ? (
                                        <div 
                                            ref={sliderRef}
                                            onMouseMove={handleSliderMove}
                                            onTouchMove={handleSliderMove}
                                            onMouseDown={handleMouseDown}
                                            onMouseUp={handleMouseUp}
                                            onMouseLeave={handleMouseUp}
                                            className={`relative w-fit mx-auto h-auto overflow-hidden select-none touch-none ${isDragging ? 'cursor-ew-resize' : 'cursor-default'}`}>
                                            {/* Hidden image to set container height */}
                                            <img
                                                src={selectedFile.previewUrl}
                                                alt="Hidden"
                                                className="max-w-full h-auto max-h-[600px] block invisible"
                                            />
                                            
                                            {/* Background: Original Image */}
                                            <img
                                                src={selectedFile.previewUrl}
                                                alt="Original"
                                                className="absolute inset-0 w-full h-full object-contain"
                                            />
                                            
                                            {/* Overlay: Enhanced Image (Clipped from the left) */}
                                            <div 
                                                className="absolute inset-0 overflow-hidden"
                                                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                                                <img
                                                    src={enhancedImage.url}
                                                    alt="Enhanced"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            {/* Divider Line */}
                                            <div 
                                                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
                                                style={{ left: `${sliderPosition}%` }}>
                                                <div className={`size-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-[3px] border-primary/30 -translate-x-1/2 pointer-events-auto cursor-ew-resize transition-transform ${isDragging ? 'scale-110' : 'hover:scale-105'}`}>
                                                    <div className="flex gap-0.5">
                                                        <div className="w-0.5 h-4 bg-slate-300 rounded-full"></div>
                                                        <div className="w-0.5 h-4 bg-slate-300 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">Before</div>
                                            <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">After</div>
                                        </div>
                                    ) : (
                                        <img
                                            src={selectedFile.previewUrl}
                                            alt="Preview"
                                            className="w-full h-auto max-h-[600px] object-contain mx-auto"
                                        />
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </section>

            <aside
                className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col lg:h-full shadow-2xl">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        <MdTune className="text-primary text-xl" />
                        Settings
                    </h2>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Quality Settings</label>
                        <div className="relative group">
                            <select
                                value={quality}
                                onChange={(e) => setQuality(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm font-medium appearance-none cursor-pointer focus:outline-none focus:border-primary/50 transition-colors">
                                <option value="Auto">Auto (Recommended)</option>
                                <option value="Low">Low (Fast)</option>
                                <option value="Medium">Medium (Balanced)</option>
                                <option value="High">High (Best Clarity)</option>
                            </select>
                            <MdExpandMore className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform group-hover:scale-110 text-xl" />
                        </div>
                    </div>
                    <hr className="border-slate-100 dark:border-slate-800" />

                    <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Output Format</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => setFormat('PNG')}
                                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${format === 'PNG' ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:border-primary/30'}`}>
                                <div className={`size-10 rounded-lg flex items-center justify-center ${format === 'PNG' ? 'bg-primary text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'}`}>
                                    <MdLayers className="text-xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold">PNG</p>
                                    <p className="text-[10px] text-slate-500">Lossless</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setFormat('JPG')}
                                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${format === 'JPG' ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:border-primary/30'}`}>
                                <div className={`size-10 rounded-lg flex items-center justify-center ${format === 'JPG' ? 'bg-primary text-white' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'}`}>
                                    <MdImage className="text-xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold">JPG</p>
                                    <p className="text-[10px] text-slate-500">Compact</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setFormat('JPEG')}
                                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${format === 'JPEG' ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:border-primary/30'}`}>
                                <div className={`size-10 rounded-lg flex items-center justify-center ${format === 'JPEG' ? 'bg-primary text-white' : 'bg-green-100 dark:bg-green-900/30 text-green-600'}`}>
                                    <MdPhotoLibrary className="text-xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold">JPEG</p>
                                    <p className="text-[10px] text-slate-500">Standard</p>
                                </div>
                            </button>
                            <button
                                onClick={() => setFormat('WEBP')}
                                className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${format === 'WEBP' ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:border-primary/30'}`}>
                                <div className={`size-10 rounded-lg flex items-center justify-center ${format === 'WEBP' ? 'bg-primary text-white' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'}`}>
                                    <MdAutoAwesome className="text-xl" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold">WEBP</p>
                                    <p className="text-[10px] text-slate-500">Modern</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                    {!enhancedImage ? (
                        <button
                            onClick={handleEnhance}
                            disabled={!selectedFile || isEnhancing}
                            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                            {isEnhancing ? (
                                <>
                                    <MdSync className="text-xl animate-spin" />
                                    Enhancing...
                                </>
                            ) : (
                                <>
                                    <MdAutoAwesome className="text-xl" />
                                    Enhance Now
                                </>
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={handleDownload}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-green-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 animate-in fade-in zoom-in duration-300">
                            <MdFileDownload className="text-xl" />
                            Download Image
                        </button>
                    )}
                    <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest">
                        {enhancedImage ? 'Ready for download' : 'Secure 256-bit encryption'}
                    </p>
                </div>
            </aside>
        </main>
    );
}

export default Workspace;