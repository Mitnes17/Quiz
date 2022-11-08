import { useState } from 'react';
import { Variants } from '../Variats';
import { questions } from './mockData';
import { Props } from './Quiz';
import * as S from './styled';

export const Quiz = () => {
  const [step, setStep] = useState(1);

  const choose = () => setStep(step + 1);

  const title = questions[step].title;

  const variants = questions[step].variants;

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <S.Container>
      <S.ProgressBar style={{ width: `${percentage}%` }}></S.ProgressBar>
      <S.H2>{title}</S.H2>
      <Variants
        onClick={choose}
        {...{ variants }}
      />
    </S.Container>
  );
};
