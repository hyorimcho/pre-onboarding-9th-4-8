import { Tr, Td } from '@chakra-ui/react';
import { IData } from '@/interface/data';

const TableRow = ({ item }: { item: IData }) => {
  return (
    <Tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.transaction_time}</Td>
      <Td>{item.status ? 'true' : 'false'}</Td>
      <Td>{item.customer_id}</Td>
      <Td>{item.customer_name}</Td>
      <Td>{item.currency}</Td>
    </Tr>
  );
};
export default TableRow;
