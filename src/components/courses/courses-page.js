import React, { Prototype } from 'react';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ''
      }
    };
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  render() {
    return (
      <form>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="Submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
