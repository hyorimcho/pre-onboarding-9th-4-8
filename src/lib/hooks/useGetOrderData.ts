import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sorting: string | null,
  status?: boolean,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sorting, status],
    queryFn: () =>
      getOrderData(pageNum - 1, date, sorting, status).then((res) => res.data),
    // refetchInterval: 5000,
    refetchOnWindowFocus: false,
  });
};

export default useGetOrderData;
