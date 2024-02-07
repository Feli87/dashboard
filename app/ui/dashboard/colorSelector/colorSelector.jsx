// components/ColorSelector.js
import { MdArrowDropDown } from 'react-icons/md';
import styles from './colorSelector.module.css';
import { useState } from 'react';

const ColorSelector = () => {
    const [selectedTeam, setSelectedTeam] = useState('default');

    const handleChange = (e) => {
        setSelectedTeam(e.target.value);
        // Aquí cambiamos todas las variables CSS según el equipo seleccionado
        switch (e.target.value) {
            case 'warm':
                setColors('#3c1c15', '#432118', '#fff', '#b7bac1', '#000000', '#5a2e2e');
                break;
            case 'cool':
                setColors('#1c253c', '#213143', '#fff', '#b7bac1', '#000000', '#2e374a');
                break;
            case 'vibrant':
                setColors('#2c1c15', '#312118', '#fff', '#b7bac1', '#000000', '#4a2e2e');
                break;
            case 'soft':
                setColors('#1c2415', '#212918', '#fff', '#b7bac1', '#000000', '#2e3a2e');
                break;
            case 'pastel':
                setColors('#2c2115', '#322718', '#fff', '#b7bac1', '#000000', '#4a3a2e');
                break;
            case 'dark':
                setColors('#151515', '#181818', '#fff', '#b7bac1', '#000000', '#2e2e2e');
                break;
            case 'earth':
                setColors('#291b15', '#2f1f18', '#fff', '#b7bac1', '#000000', '#46322e');
                break;
            case 'bright':
                setColors('#1c2c15', '#213218', '#fff', '#b7bac1', '#000000', '#2e4a2e');
                break;
            default:
                setColors('#151c2c', '#182237', '#fff', '#b7bac1', '#000000', '#2e374a'); // Valor predeterminado
                break;
        }
    };

    const setColors = (bg, bgSoft, text, textSoft, textDark, hoverSoft) => {
        document.documentElement.style.setProperty('--bg', bg);
        document.documentElement.style.setProperty('--bgSoft', bgSoft);
        document.documentElement.style.setProperty('--text', text);
        document.documentElement.style.setProperty('--textSoft', textSoft);
        document.documentElement.style.setProperty('--textDark', textDark);
        document.documentElement.style.setProperty('--hoverSoft', hoverSoft);
    };

    return (
        <div className={styles.container}>
            <MdArrowDropDown size={18} />
            <select className={styles.select} id="teamSelect" value={selectedTeam} onChange={handleChange}>
                <option value="default">Select Theme</option>
                <option value="warm">Warm</option>
                <option value="cool">Cool</option>
                <option value="vibrant">Vibrant</option>
                <option value="soft">Soft</option>
                <option value="pastel">Pastel</option>
                <option value="dark">Dark</option>
                <option value="earth">Earth</option>
                <option value="bright">Bright</option>
            </select>
        </div>
    );
};

export default ColorSelector;
