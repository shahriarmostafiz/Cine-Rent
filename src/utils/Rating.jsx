/* eslint-disable react/prop-types */
import starpic from "../assets/star.svg"

const Rating = ({ rating }) => {
    const stars = Array(rating).fill(starpic)
    return (
        <>
            {
                stars.map((star, idx) => <img key={idx} src={star} width="14" height="14" alt="star"></img>)
            }


        </>


    );
};

export default Rating;