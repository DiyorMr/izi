import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ children }) => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
