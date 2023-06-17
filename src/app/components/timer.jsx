'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './timer.module.css'


export default function Timer() {
    const [TimerDays, setTimerDays] = useState('00');
    const [TimerHours, setTimerHours] = useState('00');
    const [TimerMinutes, setTimerMinutes] = useState('00');
    const [TimerSeconds, setTimerSeconds] = useState('00');

    const [TimerDays2, setTimerDays2] = useState('00');
    const [TimerHours2, setTimerHours2] = useState('00');
    const [TimerMinutes2, setTimerMinutes2] = useState('00');
    const [TimerSeconds2, setTimerSeconds2] = useState('00');

    let interval = useRef();

    const starTimer = () => {
        const countDownDate = new Date('5 17, 2024 00:00:00').getTime();
        const countDownDate2 = new Date('7 10, 2010 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const now2 = new Date().getTime();
            const distance2 = countDownDate2 - now2;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            const days2 = Math.floor(distance2 / (-1000 * 60 * 60 * 24));
            const hours2 = Math.floor((distance2 % (-1000 * 60 * 60 * 24)) / (-1000 * 60 * 60));
            const minutes2 = Math.floor((distance2 % (-1000 * 60 * 60)) / (-1000 * 60));
            const seconds2 = Math.floor((distance2 % (-1000 * 60)) / (-1000));

            if (distance <= 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            };

            if (distance2 <= 0) {
                setTimerDays2(days2);
                setTimerHours2(hours2);
                setTimerMinutes2(minutes2);
                setTimerSeconds2(seconds2);
            };
        }, 1000);
    };

    useEffect(() => {
        starTimer();
        return () => {
            clearInterval(interval)
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles.timer}>
                <h2>Día Internacional contra la Homofobia, Transfobia y Bifobia</h2>
                <div className={styles.days}>
                    <div>
                        <h4>{TimerDays}</h4>
                        <p>Dias</p>
                    </div>
                    <div>
                        <h4>{TimerHours}</h4>
                        <p>Horas</p>
                    </div>
                    <div>
                        <h4>{TimerMinutes}</h4>
                        <p>Min</p>
                    </div>
                    <div>
                        <h4>{TimerSeconds}</h4>
                        <p>Seg</p>
                    </div>
                </div>
                <span>El Día Internacional contra la Homofobia, Transfobia y Bifobia se celebra el 17 de mayo para conmemorar la eliminación de la homosexualidad de la lista de enfermedades mentales por parte de la Asamblea General de la Organización Mundial de la Salud, la que tuvo lugar el 17 de mayo de 1990</span>
            </div>
            <div className={styles.timer}>
                <h2>Sanción de la ley de matrimonio igualitario y libertad de sexo</h2>
                <div className={styles.days}>
                    <div>
                        <h4>{TimerDays2}</h4>
                        <p>Dias</p>
                    </div>
                    <div>
                        <h4>{TimerHours2}</h4>
                        <p>Horas</p>
                    </div>
                    <div>
                        <h4>{TimerMinutes2}</h4>
                        <p>Min</p>
                    </div>
                    <div>
                        <h4>{TimerSeconds2}</h4>
                        <p>Seg</p>
                    </div>
                </div>
                <span>La Cámara de Diputados aprobó una combinación de dos leyes propuestas para modificar el Código Civil a fin de permitir el matrimonio entre personas del mismo sexo. Finalmente, la Ley 26.618 el 15 de julio de 2010, que transformó a la Argentina en el primer país de Latinoamérica en el primer pais con esta ley</span>
            </div>
        </div>
    )
}