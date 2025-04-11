import { FC } from 'react';
import { TheWorkItem } from './TheWorkItem';

export const TheWorkList: FC = () => {
  return (
    <ul className='grid grid-cols-3 gap-4'>
      <li>
        <TheWorkItem />
      </li>
      <li>
        <TheWorkItem />
      </li>
      <li>
        <TheWorkItem />
      </li>
      <li>
        <TheWorkItem />
      </li>
      <li>
        <TheWorkItem />
      </li>
    </ul>
  );
};
