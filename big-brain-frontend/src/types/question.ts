enum QType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
type Question = {
  id: string;
  type: QType;
  question: string;
  timeLimit: number;
  points: number;
  media?: string;
  answers: Answer[];

};
type Answer = {
  id: string;
  answer: string;
  isCorrect: boolean;
};
export { QType };
export type { Question, Answer };
