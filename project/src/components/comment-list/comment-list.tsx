import {Comment} from '../../types/comment';
import {comments} from '../../mocks/comments';

function CommentList(): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment: Comment) => (
        <li className="reviews__item" key={comment.id}>
          <div className="reviews__user user" >
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {comment.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${comment.rating/5*100}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
          </div>
        </li>
      ))}
    </ul>
  );}


export default CommentList;
