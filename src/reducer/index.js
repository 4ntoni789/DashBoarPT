import { combineReducers } from "redux";
import filterVentaAñoReducer from "./filterVentaAñoReducer";

const reducer = combineReducers({
    datosFilter: filterVentaAñoReducer,
});

export default reducer;