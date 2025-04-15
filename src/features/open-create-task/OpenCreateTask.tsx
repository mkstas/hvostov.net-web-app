import { FC } from 'react';
import { UiButton } from '@/components';

interface Props {
  onClickButton: () => void;
}

export const OpenCreateTask: FC<Props> = ({ onClickButton }) => {
  return <UiButton onClick={onClickButton}>Добавить работу</UiButton>;
};
