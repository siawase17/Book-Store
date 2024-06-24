import { BookReviewItemWrite } from "@/models/book.model"
import { useForm } from "react-hook-form";
import Button from "../common/Button";
import styled from "styled-components";

interface Props {
    onAdd: (data: BookReviewItemWrite) => void;
};

const BookReviewAdd = ({ onAdd }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BookReviewItemWrite>();

    return (
        <BookReviewAddStyle>
            <form onSubmit={handleSubmit(onAdd)}>
                <fieldset>
                    <textarea
                        {...register('content', { required: true })}
                    ></textarea>
                    {errors.content && <p className="error-text">
                        리뷰를 입력해주세요.
                    </p>}
                </fieldset>
                <div className="submit">
                    <fieldset>
                        <select
                            {...register('score', { required: true, valueAsNumber: true })}>
                            <option value="1">1점</option>
                            <option value="2">2점</option>
                            <option value="3">3점</option>
                            <option value="4">4점</option>
                            <option value="5">5점</option>
                        </select>
                    </fieldset>
                    <Button size="small" scheme="primary">
                        작성하기
                    </Button>
                </div>
            </form>
        </BookReviewAddStyle>
    )
};

const BookReviewAddStyle = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 6px;

        fieldset {
            border: 0;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
            justify-content: end;

            .error_text {
                color: red;
                padding: 0;
                margin: 0;
            }
        }

        textarea {
            width: 100%;
            height: 100px;
            border-radius: ${({ theme }) => theme.borderRadius.default};
            border: 1px solid #ddd;
            outline-color: #c5c5c5;
            padding: 12px;
            resize: none;
        }

    }

    .submit {
        display: flex;
        gap: 15px;
        justify-content: end;
        margin-top: 5px;

        select {
            padding: 10.5px 9px;
            font-size: 1rem;
            border: 1px solid #ddd;
            border-radius: ${({ theme }) => theme.borderRadius.default};

            option {
                padding: 5px;
            }
        }
    }
`

export default BookReviewAdd