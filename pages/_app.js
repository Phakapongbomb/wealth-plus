import Navbar from "@/component/navbar";
import "../public/css/core/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}