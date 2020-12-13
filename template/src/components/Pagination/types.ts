import { BoxProps } from "@chakra-ui/react";

export interface IPagination {
  page: number;
  pageSize: number;
  limit: number;
}

export interface IPaginationProps extends IPagination, BoxProps {
  onChange(v: any): void;
}
