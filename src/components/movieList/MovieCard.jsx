import React from 'react';
import { getImageUrl } from '../../utils/utility';
import star from "../../assets/star.svg"
import Rating from '../../utils/Rating';
const MovieCard = ({ movie }) => {
    const { id,
        cover,
        title,
        description,
        genre,
        rating,
        price } = movie
    console.log(cover);
    return (
        <div>
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl min-h-[600px]">
                <img className="w-full object-cover h-96" src={getImageUrl(cover)} alt="" />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <Rating rating={rating} />
                        {/* <img src={star} width="14" height="14" alt="" />
                        <img src={star} width="14" height="14" alt="" />
                        <img src={star} width="14" height="14" alt="" />
                        <img src={star} width="14" height="14" alt="" />
                        <img src={star} width="14" height="14" alt="" /> */}

                    </div>
                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#">
                        <img src="../../assets/tag.svg" alt="" />
                        <span>${price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </div>
    );
};

export default MovieCard;