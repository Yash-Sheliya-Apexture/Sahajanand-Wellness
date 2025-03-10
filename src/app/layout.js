// src/app/(public)/layout.js
import './globals.css';
import Header from './(public)/components/Header/Header';
import Footer from './(public)/components/Footer/Footer'

export default function RootLayout({ children }) {
    return(
        <html>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}