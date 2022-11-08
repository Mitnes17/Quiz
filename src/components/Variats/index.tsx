import { FC } from 'react';
import { Props } from './Variants';
import * as S from './styled';

export const Variants: FC<Props> = ({ question, onClick }) => {
  const variant = question.variants;

  return (
    <S.List>
      {variant.map((text: string, index: number) => (
        <li
          onClick={() => onClick(index)}
          key={index}
        >
          {text}
        </li>
      ))}
    </S.List>
  );
};
