import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
    const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
            <h1>Meet The Best Futball Players Of The World</h1>
            <div className="dark-mode_toggle">
            <div onClick={toggleMode} 
            className={darkMode ? 'toggle toggled': 'toggle'} 
            />
			</div>
		</nav>
	);
};

export default Navbar;