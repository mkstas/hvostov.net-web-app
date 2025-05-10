'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useCustomSearchParams = (param: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
