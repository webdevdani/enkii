import { useContext } from 'react';
import AuthUserContext from './context';

const useAuthUser = () => useContext(AuthUserContext);

export default useAuthUser;
