import { useQuery } from '@tanstack/react-query';
import { getOrderData } from '@/api/order';

const useGetOrderData = (
  pageNum = 1,
  date: string | null,
  sorting?: string | null,
) => {
  return useQuery({
    queryKey: ['/mock/order', pageNum, date, sorting],
    queryFn: () =>
      getOrderData(pageNum - 1, date, sorting).then((res) => res.data),
    // refetchInterval: 5000,
    refetchOnWindowFocus: false,
  });
};

export default useGetOrderData;
