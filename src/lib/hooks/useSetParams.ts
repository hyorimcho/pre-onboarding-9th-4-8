import { useSearchParams } from 'react-router-dom';
import { IOnSetParams } from '@/interface/main';

const useSetParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const currentDate = searchParams.get('date');
  const sorting = searchParams.get('sorting');
  const status = searchParams.get('status');

  const onSetParams = ({ pageValue, dateValue, event }: IOnSetParams) => {
    if (pageValue !== undefined) searchParams.set('page', String(pageValue));
    if (dateValue !== undefined) searchParams.set('date', String(dateValue));
    if (event) searchParams.set('date', String(event.target.value));
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  const setSorting = (value: string) => {
    if (sorting === value) searchParams.set('sorting', `${value}-descending`);
    else searchParams.set('sorting', value);
    setSearchParams(searchParams);
  };

  return {
    currentPage,
    currentDate,
    onSetParams,
    sorting,
    setSorting,
    setStatus,
  };
};

export default useSetParams;
