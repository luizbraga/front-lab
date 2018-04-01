import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  renderContentField(field) {
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values) {
    // this === component
    console.log(values)
  }

  render(){
    const {handleSubmit} = this.props;


    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          name="content"
          component={this.renderContentField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter a categorie!"
  }
  if (!values.content) {
    errors.content = "Enter some content!"
  }

  return errors
}

export default reduxForm({
      validate,
      form: 'PostsNewForm'
    })(PostsNew);
