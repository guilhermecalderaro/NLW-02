import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/23242171?s=460&v=4" alt="avatar"/>
                <div>
                    <strong>Guilherme Calderaro</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi omnis facere eos, debitis reiciendis sunt modi, consectetur nihil adipisci consequatur reprehenderit qui veniam laboriosam itaque dolore possimus aut perspiciatis!
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
    </article>
    )
}

export default TeacherItem;