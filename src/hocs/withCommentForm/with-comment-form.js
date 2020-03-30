import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withCommentForm = (Component) => {
  class WithCommentForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``,
        error: ``,
        success: ``,
        disabled: false,
      };

      this.clearForm = this.clearForm.bind(this);
      this.onRatingChange = this.onRatingChange.bind(this);
      this.onCommentChange = this.onCommentChange.bind(this);
      this.addError = this.addError.bind(this);
      this.addSuccess = this.addSuccess.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    clearForm() {
      this.setState({
        rating: 0,
        comment: ``,
      });
    }

    onRatingChange(event) {
      this.setState({
        rating: parseInt(event.target.value, 10),
      });
    }

    onCommentChange(event) {
      this.setState({
        comment: event.target.value,
      });
    }

    addError(error) {
      this.setState({
        error,
        disabled: false,
      });

      this.clearForm();
    }

    addSuccess() {
      this.setState({
        success: `Комментарий успешно добавлен`,
        disabled: false,
      });

      this.clearForm();
    }

    onSubmit(event) {
      event.preventDefault();
      const {id, addComment} = this.props;
      const {comment, rating} = this.state;
      const addError = this.addError;
      const addSuccess = this.addSuccess;

      this.setState({
        disabled: true,
      });

      addComment({id, rating, comment, addError, addSuccess});
    }

    render() {
      return <Component
        state={this.state}
        onRatingChange={this.onRatingChange}
        onCommentChange={this.onCommentChange}
        onSubmit={this.onSubmit}
      />;
    }
  }

  WithCommentForm.propTypes = {
    id: PropTypes.number.isRequired,
    addComment: PropTypes.func.isRequired,
  };

  return WithCommentForm;
};

export default withCommentForm;
