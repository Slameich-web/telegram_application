import { useEffect } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { useTelegram } from './hooks/useTelegram';
function App() {
    const { TG, onToggleButton } = useTelegram()
    useEffect(() => {
        TG.ready();
    }, [TG])
    return (
        <div className="App">
            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
