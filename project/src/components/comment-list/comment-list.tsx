import {Comment} from '../../types/comment';
import {comments} from '../../mocks/comments';
import CommentItem from '../comment-item/comment-item';

function CommentList(): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((commentItem: Comment) => (
        <CommentItem comment={commentItem} key={commentItem.id} />
      ))}
    </ul>
  );}


export default CommentList;
