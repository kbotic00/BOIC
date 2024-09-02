"use client"; // Dodajte ovu liniju na vrh datoteke

import React, { useState } from "react";
import styles from './faqs.module.css';

function FaqsBox() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.heading}>FAQS</div>
            <div className={styles.list}>
                {[
                    {
                        number: '01',
                        question: 'Za koliko stiže paket?',
                        answer: 'Paket stiže u roku 5-7 radnih dana.'
                    },
                    {
                        number: '02',
                        question: 'Kako funkcionira povrat?',
                        answer: ' Možete ga napraviti uživo ili putem pošte. Uživo donesete patike i račun na uvid. Kod povrata putem pošte pošaljete kopiju računa uz paket ili putem maila.'
                    },
                    {
                        number: '03',
                        question: 'Imaju li članovi popust?',
                        answer: ' Popust za članove na nesnižene proizvode je 10% te na snižene 5%. Popust se obračunava u košarici unosom broja kartice.'
                    },
                    {
                        number: '04',
                        question: 'Koliko nakon povrata treba da se novac vrati na račun?',
                        answer: 'Novac će biti vraćen na račun unutar 14 radnih dana.'
                    }
                ].map((faq, index) => (
                    <div 
                        key={index} 
                        className={`${styles.element} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggle(index)}
                    >
                        <div className={styles.box}>
                            <div className={styles.number}>{faq.number}</div>
                            <div className={styles.fullQuestion}>
                                <div className={styles.question}>{faq.question}</div>
                            </div>
                            <div className={`${styles.expand} ${activeIndex === index ? styles.active : ''}`}>
                                +
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.answer}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqsBox;