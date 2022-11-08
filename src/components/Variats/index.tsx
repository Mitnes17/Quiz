import { FC } from 'react';
import { Props } from './Variants';
import * as S from './styled';

export const Variants: FC<Props> = ({ variants, onClick }) => {
  return (
    <S.List>
      {variants.map((text: string) => (
        <li {...{ onClick }}>{text}</li>
      ))}
    </S.List>
  );
};
