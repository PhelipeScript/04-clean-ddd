import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'
import { Question } from '../../enterprise/entities/question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    console.log(question)
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New question',
    content: 'content of the question',
  })

  expect(question.id).toBeTruthy()
})
