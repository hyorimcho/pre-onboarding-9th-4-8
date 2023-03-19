import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import getOrderData from '@/api/getOrderData';
import PageBtn from '@/components/PageBtn';
import { LIMIT } from '@/constants/page';
import TableRow from '@/components/TableRow';
import { transactionOption } from '@/constants/transactionOption';

const Main = () => {
  const { data: orderData } = useQuery({
    queryKey: ['orderData'],
    queryFn: getOrderData,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });
  const [todayOrderList, setTodayOrderList] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let pageNums;
  const page = searchParams.get('page') as any;
  const offset = (page - 1) * LIMIT;
  const filteredData = orderData?.filter((item) =>
    item.transaction_time.includes('2023-03-08'),
  );
  const transaction = todayOrderList ? filteredData : orderData;
  if (transaction?.length) {
    pageNums = Math.ceil(transaction.length / LIMIT);
  }

  useEffect(() => {
    if (!page) setSearchParams({ page: '1' });
  }, []);

  return (
    <TableContainer m={10}>
      <Checkbox onChange={() => setTodayOrderList(!todayOrderList)}>
        오늘만 보기
      </Checkbox>
      <Table>
        <Thead>
          <Tr>
            {transactionOption.map((option, i) => (
              <Th key={i}>{option}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {transaction?.slice(offset, offset + LIMIT)?.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
      <Container mt={10}>
        <PageBtn
          page={page}
          pageNums={pageNums}
          setSearchParams={setSearchParams}
        />
      </Container>
    </TableContainer>
  );
};
export default Main;
