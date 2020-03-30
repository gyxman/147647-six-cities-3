import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 5;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
const RATING_TITLE = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

const CommentForm = ({state, onRatingChange, onCommentChange, onSubmit}) => {
  const {rating, comment, error, success, disabled} = state;
  const allowSubmit = rating && comment.length > MIN_COMMENT_LENGTH && comment.length < MAX_COMMENT_LENGTH;

  const renderRating = () => {
    const result = [];

    for (let i = MAX_RATING; i > 0; i -= 1) {
      result.push(
          <React.Fragment key={`star` + i}>
            <input
              onChange={onRatingChange}
              checked={rating === i}
              className="form__rating-input visually-hidden"
              name="rating"
              value={i}
              id={`${i}-stars`}
              type="radio"
              disabled={disabled}
            />
            <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLE[i]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
      );
    }

    return result;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {renderRating()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={onCommentChange}
        disabled={disabled}
        value={comment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={disabled || !allowSubmit}>Submit
        </button>
      </div>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  );
};


CommentForm.propTypes = {
  state: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
  }).isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
