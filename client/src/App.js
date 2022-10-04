import { useEffect } from 'react';
import './App.css';
const TG = window.Telegram.WebApp
function App() {
    useEffect(() => {
        TG.ready();
    }, [])
    const onClose = () => {
        TG.close()
    }
    return (
        <div className="App">
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default App;
