import { useContext } from 'react';
import GrowlSystemContext from './context';

const useGrowlSystem = () => useContext(GrowlSystemContext);

export default useGrowlSystem;
