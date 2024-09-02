import { useState } from 'react';
import styles from './faq.module.css'; // Importaj svoje stilove

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {[{
                number: '01',
                question: 'Za koliko dana stiže paket?',
                answer: 'Paket stiže u roku 5-7 radnih dana.'
            }, {
                number: '02',
                question: 'Kako funkcionira povrat?',
                answer: 'Možete ga napraviti uživo ili putem pošte. Uživo donesete patike i račun na uvid. Kod povrata putem pošte pošaljete kopiju računa uz paket ili putem maila.'
            }, {
                number: '03',
                question: 'Imaju li članovi popust?',
                answer: 'Popust za članove na nesnižene proizvode je 10% te na snižene 5%. Popust se obračunava u košarici unosom broja kartice.'
            }, {
                number: '04',
                question: 'Koliko nakon povrata treba da se novac vrati na račun?',
                answer: 'Novac će biti vraćen na račun unutar 14 radnih dana.'
            }].map((item, index) => (
                <div 
                    key={index} 
                    className={`${styles.element} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => toggle(index)}
                >
                    <div className={styles.box}>
                        <div className={styles.number}>{item.number}</div>
                        <div className={styles.fullQuestion}>
                            <div className={styles.question}>{item.question}</div>
                        </div>
                        <div className={`${styles.expand} ${activeIndex === index ? styles.active : ''}`}>
                            +
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className={styles.answer}>
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;