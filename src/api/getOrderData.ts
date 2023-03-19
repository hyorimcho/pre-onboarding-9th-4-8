import { AxiosResponse } from 'axios';
import { IData } from '@/interface/data';
import apiClient from '.';

const getOrderData = async () => {
  const { data }: AxiosResponse<IData[]> = await apiClient({ method: 'get' });
  return data;
};
export default getOrderData;
