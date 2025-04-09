import { FC } from 'react';
import { UiSheet } from '@/shared/_old/ui';
import { PlusIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/_old/hooks';

export const TheFilters: FC = () => {
  const selected = true;

  return (
    <div className='space-y-4'>
      <UiSheet>
        <section className='space-y-2'>
          <h2 className='text-lg font-medium'>Предметы</h2>
          <div className='space-y-1'>
            <ul className='space-y-1'>
              <li>
                <button
                  className={cn(
                    'w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors',
                    { 'hover:bg-slate-200': !selected },
                    { 'text-blue bg-sky': selected },
                  )}
                >
                  Программирование
                </button>
              </li>
              <li>
                <button
                  className={cn(
                    'w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors',
                    { 'hover:bg-slate-200': !selected },
                    { 'text-blue bg-sky': selected },
                  )}
                >
                  Информатика
                </button>
              </li>
              <li>
                <button className='w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors hover:bg-slate-200'>
                  Дискретная математика
                </button>
              </li>
            </ul>
            <button className='cursor-pointer rounded-xl p-2 transition-colors hover:bg-slate-200'>
              <PlusIcon className='size-4 stroke-2' />
            </button>
          </div>
          <div className='h-0.25 bg-slate-300'></div>
          <button className='text-blue w-full cursor-pointer rounded-xl p-1 px-2 transition-colors hover:bg-slate-200'>
            Сбросить
          </button>
        </section>
      </UiSheet>
      <UiSheet>
        <section className='space-y-2'>
          <h2 className='text-lg font-medium'>Типы работ</h2>
          <div className='space-y-1'>
            <ul className='space-y-1'>
              <li>
                <button className='w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors hover:bg-slate-200'>
                  Лабораторная работа
                </button>
              </li>
              <li>
                <button className='w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors hover:bg-slate-200'>
                  Практическая работа
                </button>
              </li>
              <li>
                <button className='w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors hover:bg-slate-200'>
                  Домашняя работа
                </button>
              </li>
            </ul>
            <button className='cursor-pointer rounded-xl p-2 transition-colors hover:bg-slate-200'>
              <PlusIcon className='size-4 stroke-2' />
            </button>
          </div>
          <div className='h-0.25 bg-slate-300'></div>
          <button className='w-full cursor-not-allowed rounded-xl p-1 px-2 text-slate-500 transition-colors'>
            Сбросить
          </button>
        </section>
      </UiSheet>
    </div>
  );
};
