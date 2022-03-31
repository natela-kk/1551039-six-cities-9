import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-actions';
import {Comment} from '../../types/comment';
import CommentItem from '../comment-item/comment-item';

type CommentListProps = {
  offerId: number;
}

function CommentList({offerId}: CommentListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {comments} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCommentsAction(offerId));
  }, []);

  return (
    <ul className="reviews__list">
      {comments.map((commentItem: Comment) => (
        <CommentItem comment={commentItem} key={commentItem.id} />
      ))}
    </ul>
  );}


export default CommentList;

export{};
