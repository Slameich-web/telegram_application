import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
function App() {
    const { TG, onToggleButton } = useTelegram()
    useEffect(() => {
        TG.ready();
    }, [TG])
    return (
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
