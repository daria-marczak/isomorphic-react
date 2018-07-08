export const questions = `https://api.stackexchange.com/2.0/questions?site=stackoverflow`;
/**
 * The URL to receive details on a single question.
 * This request also returns the body of the question
 * @param id
 * The question ID to fetch
 */
export const question = (id)=>`https://api.stackexchange.com/2.0/questions/${id}?site=stackoverflow&filter=withbody`;