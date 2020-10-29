import React, { useEffect, useState } from 'react';
import './styles.css';
import { GitHub, Linkedin, Twitter, Twitch, Instagram } from 'react-feather';

import mountain from '../../Assets/mountain.jpg'
import myphoto from '../../Assets/myphoto.webp'

export default function Home(): JSX.Element {

    const [SocialMediasVisible, setSocialMediasVisible] = useState(false);
    const [AboutMeIsVisible, setAboutMeIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", event => {
            let last_known_scroll_position = window.scrollY;
            console.log(last_known_scroll_position);
            if (last_known_scroll_position >= 400) {
                setAboutMeIsVisible(true);
            }
            if (last_known_scroll_position >= 750) {
                setSocialMediasVisible(true);
            }
        })
    }, [])

    return (
        <div>
            <header className="header-container">

                <div className="img-text">
                    <div style={{ display: "grid" }}>
                        <h1>Gabriel Hoppe</h1>
                        <span>web and mobile developer</span>
                    </div>
                </div>

            </header>

            <section className="about-me-container">
                <h2>Sobre mim:</h2>

                {AboutMeIsVisible ?
                    <div className="about-me-window">
                        <img src={myphoto} alt="my-photo" width="250rem" className="avatar-image" />
                        <div>
                            <span className="my-name">Gabriel Hoppe</span>
                            <p className="abount-me-description">
                                Sou um desenvolvedor full-stack, apaixonado pelas tecnologias <span>React</span>, <span>ReactNative</span>  e <span>Javascript</span>,
                        <br></br>
                        comecei a programar quando tinha 14 anos desde então nunca mais parei
                        <br></br>
                        Pretendo ainda me ingressar em uma universidade visto que ainda tenho apenas 17 anos,
                        <br></br>
                        mas de qualquer forma já quero entrar no mercado de trabalho pois me sinto preparado.
                        </p>
                        </div>
                    </div>
                    : null}

            </section>


            <section className="social-medias">
                <h2>Redes sociais:</h2>
                {
                    SocialMediasVisible ?
                        <div className="social-medias-list">
                            <a href="https://github.com/HoppeDevz" target="blank"><GitHub size={36} color="rebeccapurple" className="social-media-icon" /></a>
                            <a href="https://www.linkedin.com/in/gabriel-hoppe-0b13a51ab/" target="blank"><Linkedin size={36} color="rebeccapurple" className="social-media-icon" /></a>
                            <a href="https://www.instagram.com/gabrielhoppe/" target="blank"><Instagram size={36} color="rebeccapurple" className="social-media-icon" /></a>
                            <a href="https://twitter.com/GabrielhoppeM" target="blank"><Twitter size={36} color="rebeccapurple" className="social-media-icon" /></a>
                            <a href="https://twitch.tv/hoppecueio" target="blank"><Twitch size={36} color="rebeccapurple" className="social-media-icon" /></a>
                        </div>
                        : null
                }
            </section>

            <footer>
                © Copyright 2020.
            </footer>
        </div>
    )
}