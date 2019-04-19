import * as types from "./actionsType";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
