import { LoaderCont } from 'Loader.styles';
import { Roller } from 'react-spinners-css';
export const Loader = () => {
  return <LoaderCont>{<Roller color={'#04b8d4'} />}</LoaderCont>;
};
