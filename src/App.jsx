import './App.css';
import { Contact, Experience, Hero, Portfolio } from './components';

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
            <Hero />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App
