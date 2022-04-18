import Header from "./layouts/Header";
import Auctions from "./components/Auctions";
import About from "./components/About";

function App() {
    return (
        <>
            <Header />
            <main>
                <Auctions />
                <About />
            </main>
        </>
    );
}

export default App;
