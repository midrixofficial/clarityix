import { MdEmail, MdArrowForward } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <main className="min-h-[calc(100vh-280px)] flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-md mx-auto">

                    <div className="mb-8 sm:mb-10 text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Welcome Back</h1>
                        <p className="text-gray-600 text-base sm:text-lg">Sign in to your account to continue enhancing your photos with Clarityix.</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-300 hover:border-primary/50 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium group">
                            <FcGoogle className="text-xl" />
                            <span>Sign in with Google</span>
                        </button>

                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Or sign in using email</span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <MdEmail className="text-xl text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email address"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2 group">
                            <span>Continue</span>
                            <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-center text-gray-600 text-sm pt-2">
                            Don't have an account?
                            <Link to="/signup" className="text-primary hover:text-primary/80 font-semibold transition-colors ml-1">Sign up</Link>
                        </p>
                    </div>

                    <p className="mt-8 text-xs text-gray-500 text-center leading-relaxed">
                        By continuing, you agree to our
                        <a href="#" className="text-primary hover:underline ml-1">Terms of Service</a> and
                        <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Login;
