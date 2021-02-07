import React, { memo } from 'react';
import styles from './card.module.css';

const CardList = memo(({card}) => {
    const { name, office, address, phone, email, theme, fileName, fileURL } = card;
    return(
        <div className={`${styles.namecard} ${getColor(theme)}`}>
            <div className={styles.facezone}>
                <div className={`${styles.face} ${getColor(theme)}`}>
                    <img src={fileURL} alt={fileName} className={styles.faceimg}/>
                </div>
                <p className={styles.name}>{name}</p>
            </div>
            <ul className={styles.info}>
                <li className={styles.office}>{office}</li>
                <li className={styles.address}>{address}</li>
                <li className={styles.phone}>{phone}</li>
                <li className={styles.email}>{email}</li>
            </ul>
        </div>
    
    )})

function getColor(theme){
    switch (theme) {
        case 'white':
            return styles.white;
        case 'black':
            return styles.black; 
        case 'blue':
            return styles.blue; 
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}
export default CardList;<div></div>