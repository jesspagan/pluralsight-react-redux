import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("should handle creating courses", () => {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = { title: "Clean Code" };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});

it("should handle updating courses", () => {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course1 = { id: 1, title: "title" };
  const course2 = { id: 2, title: "title2" };
  const updateCourse = { id: 1, title: "title1" };

  // act
  const action1 = courseActions.createCourseSuccess(course1);
  const action2 = courseActions.createCourseSuccess(course2);
  const action3 = courseActions.updateCourseSuccess(updateCourse);
  store.dispatch(action1);
  store.dispatch(action2);
  store.dispatch(action3);

  // assert
  const courses = store.getState().courses;
  expect(courses.length).toEqual(2);
  expect(courses[0]).toEqual(updateCourse);
  expect(courses[1]).toEqual(course2);
});
