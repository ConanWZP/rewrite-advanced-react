import {bindActionCreators} from "redux";
import {allActionCreators} from "../store/reducers/action-creators";
import {useDispatch} from "react-redux";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}