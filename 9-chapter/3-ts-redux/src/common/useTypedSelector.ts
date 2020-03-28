import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReduxState } from './store';

const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export default useTypedSelector;
