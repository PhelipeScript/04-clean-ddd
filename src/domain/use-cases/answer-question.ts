import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({
    content,
    instructorId,
    questionId,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content);

    return answer;
  }
}
