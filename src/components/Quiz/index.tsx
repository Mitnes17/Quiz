import { useState } from 'react';
import { Variants } from '../Variats';
import { questions } from './mockData';
import * as S from './styled';

export type Question = {
  title: string;
  variants: Array<string>;
  correct: number;
  id: number;
};

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const choose = (index: number) => {
    setStep(step + 1);

    if (questions[step].correct === index) setCorrect(correct + 1);
  };

  const title = questions[step].title;

  const question: Question = questions[step];

  const percentage = Math.round((step / (questions.length - 1)) * 100);

  return (
    <div>
      {step !== questions.length - 1 ? (
        <S.Container>
          <S.ProgressBar style={{ width: `${percentage}%` }}></S.ProgressBar>
          <S.H2>{title}</S.H2>

          <Variants
            onClick={choose}
            {...{ question }}
          />
        </S.Container>
      ) : (
        <S.Result>
          <S.Congratulations>Congratulations!</S.Congratulations>
          <img
            src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png'
            alt=''
          />
          <p>You answered {correct} question correctly!</p>
          <S.Link href='/'>Try again</S.Link>
        </S.Result>
      )}
    </div>
  );
};
