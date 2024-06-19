import { BookReviewItem } from '@/models/book.model';
import { http, HttpResponse } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

// const mockReviewsData: BookReviewItem[] = [
//     {
//         id: 1,
//         userName: '박엄지',
//         content: '인생 책 ㄹㅈㄷ',
//         createdAt: '2024-05-21',
//         score: 5,
//     },
//     {
//         id: 2,
//         userName: '김엄지',
//         content: 'ㅋ 이런 책 누가삼 짱남',
//         createdAt: '2024-03-06',
//         score: 2,
//     },
// ];

const mockReviewsData: BookReviewItem[] = Array.from({ length: 8 }).map((_, index) => ({
    id: index,
    userName: faker.person.firstName(),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past().toISOString(),
    score: faker.helpers.rangeToNumber({ min: 1, max: 5 })
}));

export const reviewsById = http.get("http://localhost:9999/reviews/:bookId", () => {
    return HttpResponse.json(mockReviewsData, {
        status: 200,
    });
});