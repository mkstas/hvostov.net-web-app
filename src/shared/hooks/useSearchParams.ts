'use client';

import { usePathname, useRouter, useSearchParams as useNextSearchParams } from 'next/navigation';

export const useSearchParams = (param: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  const urlParams = new URLSearchParams(searchParams.toString());

  const getSearchParams = () => {
    return searchParams.getAll(param);
  };

  const setSearchParams = () => {
    router.push(pathname + '?' + urlParams.toString());
  };

  const appendSearchParam = (value: string) => {
    urlParams.append(param, value);
    setSearchParams();
  };

  const deleteSearchParam = (value: string) => {
    urlParams.delete(param, value);
    setSearchParams();
  };

  return { getSearchParams, setSearchParams, appendSearchParam, deleteSearchParam };
};
