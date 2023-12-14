import { makeAnswer } from 'test/factories/make-answer'
import { OnAnswerCreated } from './on-answer-created'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'

let inMemoryAnswersRespository: InMemoryAnswersRepository
let inMemoryAnswerAttachmentsRespository: InMemoryAnswerAttachmentsRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRespository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRespository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRespository,
    )
  })

  it('should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAnswerCreated()

    const answer = makeAnswer()

    await inMemoryAnswersRespository.create(answer)
  })
})
