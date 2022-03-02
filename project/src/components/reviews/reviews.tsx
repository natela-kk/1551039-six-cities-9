import {Review} from '../../types/offer';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews(reviews: ReviewsProps): JSX.Element {
  return (
    <>
      {reviews.reviews.map((item) => (
        <li className="reviews__item" key={1}>
          <div className="reviews__user user" >
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={item.userAvatar} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name" key={1}>
              {item.userName}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: '80%'}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {item.description}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{item.date}</time>
          </div>
        </li>
      ))}
    </>
  );}


export default Reviews;
