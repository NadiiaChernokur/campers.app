import { useEffect, useState } from 'react';
import { AutoCard } from '../AutoCard/AutoCard';
import { Filter } from '../Filter/Filter';
import {
  CampersButton,
  FilterContainer,
  FlexDiv,
  MainContainer,
} from './CampersPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { emptyArray, getCampers, totalCampers } from '../redux/operation';

const CampersPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isArray, setIsArray] = useState(false);
  const [click, setClick] = useState(false);
  const [buttonDisable, setbuttonDisable] = useState(false);
  const totalArrey = useSelector(state => state.totalCampers);
  const campersArrey = useSelector(state => state.campersArray);
  const newFilterArray = useSelector(state => state.newFilterArray);
  console.log(newFilterArray.length);
  const LoadMore = () => {
    if (campersArrey.length + 4 >= totalArrey.length) {
      setbuttonDisable(true);
    }
    setPage(prev => prev + 1);
    dispatch(getCampers(page));
    setClick(true);
  };

  useEffect(() => {
    if (!isArray) {
      dispatch(emptyArray());
      setIsArray(true);
      return;
    }
    if (page > 1) {
      return;
    }

    setPage(prev => prev + 1);
    dispatch(getCampers(page));
    dispatch(totalCampers());
    return;
  }, [dispatch, isArray, page]);

  useEffect(() => {
    if (newFilterArray.length > 0) {
      setbuttonDisable(true);
      return;
    }
  }, [newFilterArray.length]);
  useEffect(() => {
    if (click) {
      setClick(false);
    }
  }, [click]);
  return (
    <>
      <MainContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <FlexDiv>
          <AutoCard page={page} />
          {buttonDisable ? (
            <CampersButton onClick={LoadMore} style={{ display: 'none' }}>
              Load more
            </CampersButton>
          ) : (
            <CampersButton
              onClick={LoadMore}
              style={{ border: click ? '1px solid red' : 'none' }}
            >
              Load more
            </CampersButton>
          )}
        </FlexDiv>
      </MainContainer>
    </>
  );
};
export default CampersPage;
