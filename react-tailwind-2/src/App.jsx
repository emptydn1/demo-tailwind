import Header from "./layouts/Header";
import Auctions from "./components/Auctions/Auctions";
import About from "./components/About";
import Sale from "./components/Sale";
import About2 from "./components/About2";
import Popular from "./components/Popular";
import JoinNow from "./components/JoinNow";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
    const [isDark, setIsDark] = useDarkMode();
    return (
        <>
            <Header isDark={isDark} />
            <main>
                <div
                    className="fixed cursor-pointer z-50 bottom-20 right-10 sm:bottom-40 sm:right-20 inline-block py-[1.5625rem] px-[1.625rem] bg-dark1 text-white dark:bg-white  rounded-full"
                    onClick={(e) => setIsDark(!isDark)}
                >
                    <span className="material-icons dark:text-dark1">
                        wb_sunny
                    </span>
                </div>
                <Auctions />
                <About />
                <Sale />
                <About2 />
                <hr className="dark:border-dark3" />
                <Popular />
                <hr className="dark:border-dark3" />
                <JoinNow isDark={isDark} />
                <img
                    src="/assets/img/Scrolling ETH.png"
                    alt=""
                    className="mb-[9.375rem]"
                />
                <hr className="dark:border-dark3" />

                <footer className="uppercase p-[9.375rem] text-center dark:text-white">
                    this is footer
                </footer>
            </main>
        </>
    );
}

export default App;
