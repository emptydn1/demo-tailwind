import Header from "./layouts/Header";
import Auctions from "./components/Auctions/Auctions";
import About from "./components/About";
import Sale from "./components/Sale";
import About2 from "./components/About2";
import Popular from "./components/Popular";
import JoinNow from "./components/JoinNow";

function App() {
    return (
        <>
            <Header />
            <main>
                <Auctions />
                <About />
                <Sale />
                <About2 />
                <hr />
                <Popular />
                <hr />
                <JoinNow />
                <img
                    src="/assets/img/Scrolling ETH.png"
                    alt=""
                    className="mb-[9.375rem]"
                />
                <footer className="uppercase p-[9.375rem] text-center">
                    this is footer
                </footer>
            </main>
        </>
    );
}

export default App;
