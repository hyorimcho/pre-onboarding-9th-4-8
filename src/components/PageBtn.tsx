import { Button, Stack } from '@chakra-ui/react';
import { IPageProps } from '@/interface/data';

const PageBtn = ({ page, pageNums, setSearchParams }: IPageProps) => {
  const handlePage = (page: number) => {
    setSearchParams({ page });
  };
  return (
    <Stack spacing={2} direction="row" align="center">
      <Button
        onClick={() => handlePage(page * 1 - 1)}
        isDisabled={page == 1}
        colorScheme="blue"
        variant="outline"
      >
        ‹
      </Button>
      {Array(pageNums)
        .fill(null)
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => handlePage(i + 1)}
            colorScheme="blue"
            variant={page === i + 1 ? 'solid' : 'outline'}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => handlePage(page * 1 + 1)}
        isDisabled={page == pageNums}
        colorScheme="blue"
        variant="outline"
      >
        ›
      </Button>
    </Stack>
  );
};
export default PageBtn;
