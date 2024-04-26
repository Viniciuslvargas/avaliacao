import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';


export default function Galery(){
    return(
        <div className="one-column content">
            <TextBig label="Galeria" />
            <div className="inner-container">
                <ItemImg src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/21/pc-gamer-thumb-ts56rack6f6u.jpg"/>
                <ItemImg src="https://meupc.net/wp/wp-content/uploads/2020/07/Old_Windows_PC-1099x600.jpg" />
                <ItemImg src="https://qph.cf2.quoracdn.net/main-qimg-5fd7da23fad819a3aac33e2e1df9edea-lq"/>
                </div>
                <div className='inner-container'>
                <ItemImg src="https://www.blogdocaipira.com/wp-content/uploads/2016/11/pc-com-superaquecimento.jpg" />
                <ItemImg src="https://t.ctcdn.com.br/LQT36Ewcx73frp5OZtAjLVMUCZA=/640x360/smart/i238945.jpeg" />
                <ItemImg src="https://s.zst.com.br/cms-assets/2021/12/melhor-pc-gamer.webp" />
                
            </div>
        </div>
    )
}