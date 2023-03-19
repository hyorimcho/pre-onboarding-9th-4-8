import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import getOrderData from '@/api/getOrderData';

const Main = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['data'],
    queryFn: getOrderData,
    refetchOnWindowFocus: false,
  });

  return (
    <TableContainer border="1px solid black">
      <Table size="sm">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>transaction_time</Th>
            <Th>status</Th>
            <Th>customer_id</Th>
            <Th>customer_name</Th>
            <Th>currency</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.transaction_time}</Td>
              <Td>{item.status}</Td>
              <Td>{item.customer_id}</Td>
              <Td>{item.customer_name}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default Main;
