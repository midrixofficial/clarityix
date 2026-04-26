import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black border-t border-gray-300">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                            <Link to="/">
                                <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Clarityix</span>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600">A unified workspace for smarter, faster business operations.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">Menus</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm">
                            <li><Link to="/" className="hover:opacity-70 transition">Home</Link></li>
                            <li><Link to="/tools" className="hover:opacity-70 transition">Tools</Link></li>
                            <li><Link to="/premium" className="hover:opacity-70 transition">Premium</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">Legal</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm">
                            <li><Link to="/legal/cookies-policy" className="hover:opacity-70 transition">Cookies Policy</Link></li>
                            <li><Link to="/legal/terms-of-use" className="hover:opacity-70 transition">Legal Terms</Link></li>
                            <li><Link to="/legal/privacy-policy" className="hover:opacity-70 transition">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">Support</h4>
                        <ul className="space-y-2 sm:space-y-3 text-sm">
                            <li><a href="#" className="hover:opacity-70 transition">FAQs</a></li>
                            <li><a href="#" className="hover:opacity-70 transition">About Us</a></li>
                            <li><a href="#" className="hover:opacity-70 transition">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mb-6 sm:mb-8"></div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                    <div className="text-sm order-2 lg:order-1">
                        <span className="text-gray-600 cursor-default">© 2026 Clarityix. All rights reserved.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 order-1 lg:order-2">
                        <span className="text-sm font-medium">Connect:</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            <a href="#" className="hover:opacity-70 transition">Instagram</a>
                            <a href="#" className="hover:opacity-70 transition">LinkedIn</a>
                            <a href="#" className="hover:opacity-70 transition">Twitter</a>
                            <a href="#" className="hover:opacity-70 transition">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
