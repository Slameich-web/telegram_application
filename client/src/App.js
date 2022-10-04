import { useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
export const TG = window.Telegram.WebApp;
function App() {
    useEffect(() => {
        TG.ready();
    }, [])
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
