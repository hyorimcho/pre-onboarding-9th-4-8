import { Button } from '@chakra-ui/react';
import { IPageProps } from '@/interface/data';

const PageBtn = ({ page, setPage, pageNums }: IPageProps) => {
  return (
    <>
      <Button
        onClick={() => setPage(page - 1)}
        isDisabled={page === 1}
        colorScheme="blue"
      >
        ‹
      </Button>
      {Array(pageNums)
        .fill(null)
        .map((_, i) => (
          <Button key={i + 1} onClick={() => setPage(i + 1)} colorScheme="blue">
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => setPage(page + 1)}
        isDisabled={page === pageNums}
        colorScheme="blue"
      >
        ›
      </Button>
    </>
  );
};
export default PageBtn;
