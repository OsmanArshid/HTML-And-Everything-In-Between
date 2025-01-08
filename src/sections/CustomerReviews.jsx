import {reviews} from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl font-bold text-center">
                What our <span className="text-coral-red"> Customers </span> Say?
            </h3>
            
            <p className="text-center max-w-lg mt-4 m-auto info-text">
                Hear what our genuine random customers have to say
            </p>
            
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))} 
            </div>
        </section>
    )
}

export default CustomerReviews