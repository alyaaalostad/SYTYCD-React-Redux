import { createStore } from "redux";
//import your reducer files here like the following two lines
import authorsReducer from "./authors";
import authorReducer from "./author";
const rootReducer = combineReducers({
  //the following two lines are an example
  rootAuthors: authorsReducer,
  rootAuthor: authorReducer
});

export default rootReducer;
