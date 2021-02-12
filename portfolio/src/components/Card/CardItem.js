import React from 'react'
import { Link } from 'react-router-dom';

// import './CardItem.css';

const CardItem = ({ src, text, label, path }) => {
    return (
        <>
            <div className="cards__item">
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt="Code" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {text}
                        </h5>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem;
