import React, { useState, useEffect } from 'react';
import './ThemeSelector.css';
import { Palette, X } from 'lucide-react';

const ThemeSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('dark-default');

    const themes = [
        { id: 'dark-default', name: 'Dark Indigo', color: '#6366f1' },
        { id: 'dark-ocean', name: 'Dark Ocean', color: '#06b6d4' },
        { id: 'dark-forest', name: 'Dark Forest', color: '#10b981' },
        { id: 'light-clean', name: 'Light Clean', color: '#2563eb' },
        { id: 'light-sunset', name: 'Light Sunset', color: '#ea580c' },
    ];

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    return (
        <div className={`theme-selector ${isOpen ? 'open' : ''}`}>
            <button className="theme-toggle glass" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Palette size={24} />}
            </button>
            
            <div className="theme-menu glass">
                <h4 style={{marginBottom: "15px", fontSize: "1rem"}}>Select Theme</h4>
                <div className="theme-options">
                    {themes.map(theme => (
                        <button 
                            key={theme.id}
                            className={`theme-btn ${currentTheme === theme.id ? 'active' : ''}`}
                            onClick={() => setCurrentTheme(theme.id)}
                            title={theme.name}
                        >
                            <span className="theme-preview" style={{ background: theme.color }}></span>
                            <span className="theme-name">{theme.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSelector;
