'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useFilterParams = (filterName: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlParams = new URLSearchParams(searchParams.toString());

  const getFilterParams = () => {
    return searchParams.getAll(filterName);
  };

  const setFilterParams = () => {
    router.push(pathname + '?' + urlParams.toString());
  };

  const appendFilterParam = (value: string) => {
    urlParams.append(filterName, value);
    setFilterParams();
  };

  const deleteFilterParam = (value: string) => {
    urlParams.delete(filterName, value);
    setFilterParams();
  };

  return { getFilterParams, appendFilterParam, deleteFilterParam, setFilterParams };
};
