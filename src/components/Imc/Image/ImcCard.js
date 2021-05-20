import "./style.css"
import React from 'react'

const ImcCard = ({ image, alt, containerColor, desc, desc2, title, active, sizes }) => {
    const maxWidth = parseInt(sizes.split(' ')[3].split('p')[0]) + 40;
    return (
        <section className={`main__container ${active && "active__card"}`}>
            <div className="img__container" style={{width: maxWidth + 'px'}}>
                <img loading="auto" className="img__container__img" src={image} alt={alt} />
                <div className="img__container__info">
                    <div className="background" style={{ backgroundColor: containerColor }}></div>
                    <div className="img__container__info__title">{title}</div>
                    <div>
                        <div className="img__container__info__desc">{desc}</div>
                        {desc2?.length && <div className="img__container__info__desc line">{desc2}</div>}
                    </div>
                </div>
            </div >
        </section>
    )
}

export default ImcCard;