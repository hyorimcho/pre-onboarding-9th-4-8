import { ITEMS_PER_PAGE } from '@/constants/units';
import apiClient from './apiClient';

export const getOrderData = async (
  offset: number,
  date: string | null,
  sorting?: string | null,
  status?: boolean | null,
) => {
  return await apiClient({
    method: 'get',
    url: '/mock/order',
    params: {
      offset,
      date,
      limit: ITEMS_PER_PAGE,
      sorting,
      status,
    },
  });
};
