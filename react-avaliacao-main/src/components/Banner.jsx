import React from 'react';
import TextBig from './TextBig';



export default function Banner(){
    return(
        <div className='banner container'>
            <div className="two-column content">
                <div className="inner-content">
                    <TextBig label="Evento de jogos no Senai"/>
                    <p className='textinicio'>Venha fazer parte dessa era de gamers. Aqui no SENAI, para a nossa próxima gincana,
                        tivemos a idéia de trazermos todas as nossas habilidades para campo. Traga o seu computador e venha participar
                        de várias competições.
                    </p>
                    <ul className='textinicio'>
                        <li><strong>Local</strong>: Sesi Senai, São José</li>
                        <li><strong>Horário:</strong> 10:00 às 18:00</li>
                    </ul>
                </div>
            </div>
            <div className="two-column content">
                <img src="https://www.hardware.com.br/static/00000000/img-8e48d445.jpg" alt="Lan House" srcset="" />
            </div>
        </div>
    )
}