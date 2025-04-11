import { FC } from 'react';

export const TheWorkItem: FC = () => {
  return (
    <article className='bg-c-slate-200 border-c-slate-200 hover:bg-c-slate-300 cursor-pointer space-y-1 rounded-2xl border p-3 transition-colors'>
      <div className='grid'>
        <span className='font-medium'>Название</span>
        <span className='text-c-slate-400 text-sm'>Программирование</span>
        <span className='text-c-slate-400 text-sm'>Лабораторная работа</span>
      </div>
      <div className='flex justify-between'>
        <span>20.04.2025</span>
        <span>0%</span>
      </div>
    </article>
  );
};
