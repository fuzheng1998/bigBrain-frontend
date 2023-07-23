enum QType {
    SINGLE = "single",
    MULTIPLE = "multiple"
}
type Question ={
    type: QType;
    question: string;
    timeLimit: number;
    points: number;
    media?: string;
    answers: Answer[];

}
type Answer ={
    answer: string;
    isCorrect: boolean;
}
export {QType};
export type {Question, Answer};