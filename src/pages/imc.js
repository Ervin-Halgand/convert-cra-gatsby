import '../style/Imc.css'
/* import { ImcDescriptionCard } from '../../helpers/Imc/data' */
import ImcCard from '../components/Imc/Image/ImcCard'
import Button from '../components/Button/Button'
import { Link } from 'gatsby'
import React from 'react'
import { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { Seo } from '../components/Seo/Seo'


const Imc = () => {
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [color, setColor] = useState("");
    const [activeCard, setActiveCard] = useState(undefined);
    const [IMC, setIMC] = useState(0);
    const ImcCalcul = () => {
        if (weight <= 10 || length <= 50) {
            setIMC('');
            return;
        }
        const ImcCalculation = (weight / (Math.pow((length / 100), 2))).toFixed(1);
        setIMC(ImcCalculation);
        if (ImcCalculation < 18.5) {
            setColor("#27ACE4");
            setActiveCard(0);
        }
        else if (ImcCalculation >= 18.5 && ImcCalculation < 25) {
            setColor("#c6d39c");
            setActiveCard(1);
        }
        else if (ImcCalculation >= 25 && ImcCalculation < 30) {
            setColor("#F1A91F");
            setActiveCard(2);
        }
        else if (ImcCalculation >= 30 && ImcCalculation < 35) {
            setColor("#E7752E");
            setActiveCard(3);
        }
        else if (ImcCalculation >= 35) {
            setColor("#DA1F26");
            setActiveCard(4);
        }
    }
    useEffect(() => {
        setActiveCard(undefined);
        ImcCalcul();
        // eslint-disable-next-line
    }, [weight, length])
    return (
        <StaticQuery query={graphql
            `query ImcDescriptionQuery {
                allImcDescriptionJson {
                  edges {
                    node {
                      alt
                      containerColor
                      desc
                      desc2
                      image {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                            src
                          }
                        }
                      }
                      title
                    }
                  }
                }
              }`}
            render={data =>
                <main className="app">
                    <Seo title="IMC" slug="/imc" />
                    <div className="main__container__page">
                        <div className="navigation__title">
                            <div className="imc__navigate__back">
                                <Link to="/">
                                    <Button title="Home" />
                                </Link>
                            </div>
                            <div className="imc__title__container">
                                <h1 className="imc__title">IMC</h1>
                            </div>
                        </div>
                        <div className="imc">
                            <div className="imc__info">
                                <div className={`imc__info__score ${IMC.length > 1 && 'imc__info__score__show'}`} style={{ color: color }} >{IMC}</div>
                                <div className="imc__input__container taille">
                                    <input onChange={(e) => setLength(e.target.value)} placeholder="Taille" className="imc__input" type="number" min="100" max="250" />
                                </div>
                                <div className="imc__input__container poid">
                                    <input onChange={(e) => setWeight(e.target.value)} placeholder="Poid" className="imc__input" type="number" min="30" />
                                </div>
                            </div>
                            <div className="imc__img">
                                {data.allImcDescriptionJson.edges.map((card, i) => {
                                    if (card.node.image.childImageSharp)
                                        return <ImcCard key={i} image={card.node.image.childImageSharp.fluid.src} alt={card.node.alt} sizes={card.node.image.childImageSharp.fluid.sizes}
                                            containerColor={card.node.containerColor} title={card.node.title} desc={card.node.desc} desc2={card.node?.desc2} active={activeCard === i} />
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            } />
    )
}

export default Imc;