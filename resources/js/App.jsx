import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Workspace from './pages/Workspace';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiesPolicy from './pages/legal/CookiesPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workspace" element={<Workspace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/legal/cookies-policy" element={<CookiesPolicy />} />
                    <Route path="/legal/terms-of-use" element={<TermsOfUse />} />
                </Routes>
            </main>
            <Footer />
        </div>
        </>
    )
}

export default App
