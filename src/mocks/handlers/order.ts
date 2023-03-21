import { rest } from 'msw';
import { formatDollarToNumber } from '@/lib/utils/formattingHelper';
import { generateStartAndEndDate } from '@/lib/utils/generator';
import { IOrderItem } from '@/interface/main';
import mockData from '../storage/mock_data.json';

export const orderListHandlers = [
  rest.get('/mock/order', (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset'));
    const limit = Number(req.url.searchParams.get('limit'));
    const date = req.url.searchParams.get('date');
    const sorting = req.url.searchParams.get('sorting');

    const dataOfSelectedDate = date
      ? mockData.filter((item) => item.transaction_time.split(' ')[0] === date)
      : mockData;

    const sortedData = (array: IOrderItem[], sorting: string | null) => {
      return [...array].sort((a, b) => {
        if (sorting === 'id-ascending') {
          return a.id - b.id;
        }
        if (sorting === 'id-descending') {
          return b.id - a.id;
        }
        if (sorting === 'time-ascending') {
          return (
            new Date(a.transaction_time).getTime() -
            new Date(b.transaction_time).getTime()
          );
        }
        if (sorting === 'time-descending') {
          return (
            new Date(b.transaction_time).getTime() -
            new Date(a.transaction_time).getTime()
          );
        }
        return a.id - b.id;
      });
    };

    const sortedDataList = sortedData(dataOfSelectedDate, sorting);

    const { startDate, endDate } = generateStartAndEndDate(dataOfSelectedDate);

    return res(
      ctx.json({
        order: [...sortedDataList].splice(offset * limit, limit),
        orderInfo: {
          totalCount: sortedDataList.length,
          totalCurrency: sortedDataList.reduce(
            (acc, cur) => acc + formatDollarToNumber(cur.currency),
            0,
          ),
          startDate,
          endDate,
        },
      }),
    );
  }),
];
