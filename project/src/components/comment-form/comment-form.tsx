import { ChangeEvent, useState } from 'react';

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
const MAX_STARS = 5;
const MIN_LETTERS = 50;
const MAX_LETTERS = 300;

function CommentForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const isDisabled = rating === 0 || comment.length > MAX_LETTERS ||  comment.length < MIN_LETTERS;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((ratingValue, index) => {
          const starsCount = MAX_STARS - index;
          return (
            <>
              <input className="form__rating-input visually-hidden"
                name="rating"
                value={starsCount}
                id={`${starsCount}-star${starsCount > 1 && 's'}`}
                type="radio" onChange={handleRatingChange}
              />
              <label htmlFor={`${starsCount}-star${starsCount > 1 && 's'}`}
                className="reviews__rating-label form__rating-label"
                title={ratingValue}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </>
          );})}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>{' '}
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );}

export default CommentForm;

