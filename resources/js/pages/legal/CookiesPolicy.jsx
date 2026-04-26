function CookiesPolicy() {
    return (
        <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Cookies Policy</h1>
                <p className="text-gray-600 text-lg">Last updated: January 3, 2026</p>
            </div>

            <div className="mb-12">
                <p className="text-gray-700 leading-relaxed mb-4">
                    This Cookies Policy explains how Clarityix uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-12 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                    <a href="#what-are-cookies" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">1. What Are Cookies?</a>
                    <a href="#why-we-use" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">2. Why We Use Cookies</a>
                    <a href="#types-of-cookies" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">3. Types of Cookies We Use</a>
                    <a href="#how-to-control" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">4. How to Control Cookies</a>
                    <a href="#changes" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">5. Changes to This Policy</a>
                    <a href="#contact" className="block text-gray-700 hover:text-gray-900 transition underline-offset-4 hover:underline">6. Contact Us</a>
                </nav>
            </div>

            <div className="space-y-12">
                <section id="what-are-cookies">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">1. What Are Cookies?</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                </section>

                <section id="why-we-use">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">2. Why We Use Cookies</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties.
                    </p>
                </section>

                <section id="types-of-cookies">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Website Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance and Functionality Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics and Customization Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                                These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="how-to-control">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">4. How to Control Cookies</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                    </p>
                </section>

                <section id="changes">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">5. Changes to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                </section>

                <section id="contact">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">6. Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        If you have any questions about our use of cookies or other technologies, please contact us at:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="text-gray-900 font-semibold mb-2">Clarityix Legal Team</p>
                        <p className="text-gray-700">Email: legal@clarityix.com</p>
                        <p className="text-gray-700">Address: 123 Design Avenue, Creative District, CA 94016</p>
                    </div>
                </section>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-200">
                <div className="text-center">
                    <p className="text-gray-600 mb-6">Want to know more about our privacy practices?</p>
                    <a href="/legal/privacy-policy" className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium">Read Privacy Policy</a>
                </div>
            </div>
        </main>
    )
}

export default CookiesPolicy;
