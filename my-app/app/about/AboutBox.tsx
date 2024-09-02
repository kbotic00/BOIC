import React, { useState } from "react";
import styles from './aboutUs.module.css';
import Image from "next/image";

function AboutBox() {
    
    return <>
    <div className={styles.mainContainer}>
        <div className={styles.mainPhoto}>
            <img src="./Picture.png" alt="Picture" />
        </div> 
        <div className={styles.box}>
            <div className={styles.heading}>ABOUT US</div>
            <div className={styles.rectangle}><div></div></div>
            <div className={styles.textBox}>
                <div className={styles.textOne}>Naša priča počinje 2023. s ljubavlju prema patikama koju smo htjeli podijeliti s vama.</div> 
                <div className={styles.textTwo}>Pridružite se putovanju kroz svijet najnovijih trendova, limitiranih izdanja i jedinstvenog stila.</div> 
            </div>
        </div>
    
        
    </div>
    
    
    </>
}

export default AboutBox;