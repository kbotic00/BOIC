
// HeroSection.tsx
import React, { useState } from "react";
import styles from './moreq.module.css';
import Image from "next/image";

function MoreQBox() {
    
    return <>
    <div className={styles.mainContainer}>
        <div className={styles.photoFrame}>
            <img src="./image_q.png" alt="Picture" />
        </div>
        <div className={styles.textFrame}>
            <div className={styles.heading}>Imaš još pitanja?</div>
            <div className={styles.text}>Ako imaš još neodgovorenih pitanja, slobodno nam se javi na mail info@boic.hr ili iskoristi korisničku podršku na 0800 345 625.</div>

            <form id={styles.inputForm}>
                <input type='textform' placeholder='Ime'></input>
                <input type='textform' placeholder='Prezime'></input>
                <input type='email' placeholder='Mail'></input>
                <input type='message' placeholder='Poruka'></input>
                <button><div>Pošalji</div></button>
            </form>
        </div>
    </div>

    
    
    </>
}

export default MoreQBox;
