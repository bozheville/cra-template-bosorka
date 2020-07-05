import React, { useMemo } from 'react';
import { Box } from '@chakra-ui/core';

import Button from '../Button';
import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({
  page,
  pageSize,
  limit,
  onChange,
  ...boxProps
}) => {
  const pageCount = Math.ceil(limit/pageSize);

  const pageList = useMemo(() => Array
    .from(new Array(pageCount))
    .map((_, index) => index + 1)
    .filter((item) => {
      return item === 1 ||
        item === pageCount ||
        item === page ||
        item === page + 1 ||
        item === page + 2 ||
        item === page - 1 ||
        item === page - 2;
    })
    .reduce((result: number[], page: number) => {
      const list = [...result] as number[];

      if (result.length && page - 1 !== result[result.length - 1]) {
        list.push(-page);
      }

      list.push(page);
      return list;
    }, []), [
      page,
      pageCount,
    ]);

  const handleClick = (newPage: number) => {
    return () => onChange(newPage);
  }

  return (
    <Box {...boxProps}>
      {page > 1 && (<Button onClick={handleClick(page - 1)}>prev</Button>)}
      {pageList.map((pageNum) => {

        return pageNum < 0 ? (
          <span key={`pagination-${pageNum}`}>...</span>
        ) : (
          <Button
            key={`pagination-${pageNum}`}
            variant={pageNum === page ? 'solid' : 'link'}
            onClick={handleClick(pageNum)}
            isDisabled={pageNum === page}
          >
            {pageNum}
          </Button>
        );
      })}
      {page < pageCount && (<Button onClick={handleClick(page + 1)}>next</Button>)}
    </Box>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
