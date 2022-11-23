import { Question } from '../Quiz';

export type StyleProps = {};

export type Props = StyleProps & {
  onClick: (e: number) => void;
  question: Question;
};
