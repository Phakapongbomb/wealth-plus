import Navbar from "@/component/navbar";
import "../public/css/core/globals.css";
import Footer from "@/component/Footer";
import { Provider } from "react-redux";
import { store } from "@/component/store/store";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    );
}
