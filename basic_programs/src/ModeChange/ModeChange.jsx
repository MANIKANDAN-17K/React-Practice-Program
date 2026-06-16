import {useState} from 'react';

function ModeChange() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div style={{
                backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
        }}>
            <h1>{darkMode ? 'DarkMode' : 'lightMode'}</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Switch to LightMode':'Switch to DarkMode'}
            </button>

        </div>
    );
}
export default ModeChange;