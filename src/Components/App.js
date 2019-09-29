import React, { useEffect, useState } from 'react';
import logo from '../Assets/images/logo.svg';
import '../Assets/scss/App.scss';

function App() {
    const [inputData, setInputData] = useState('');
    useEffect(() => {
        window.test = arg => {
            console.log('wowo', arg);
            setInputData(arg);
        };
    });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    {inputData}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
