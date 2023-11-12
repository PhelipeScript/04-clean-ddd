import { Answer } from '../entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    content,
    instructorId,
    questionId,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
