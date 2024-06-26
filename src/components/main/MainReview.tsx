import { BookReviewItem as IBookReviewItem } from '@/models/book.model'
import BookReviewItem from '../book/BookReviewItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CustomArrowProps } from 'react-slick';

interface Props {
    reviews: IBookReviewItem[];
}

const MainReview = ({ reviews }: Props) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        gap: 16,
        cssEase: "linear",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    }

    return (
        <MainReviewStyle>
            <Slider {...sliderSettings}>
            {reviews.map((review) => (
                <BookReviewItem key={review.id} review={review} />
            ))}
            </Slider>
        </MainReviewStyle>
    )
};

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowBack
            className={className}
            style={{ ...style, display: 'block', color: 'black', fontSize: '24px' }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <IoIosArrowForward
            className={className}
            style={{ ...style, display: 'block', color: 'black', fontSize: '24px' }}
            onClick={onClick}
        />
    );
};
const MainReviewStyle = styled.div `
    padding: 0 0 24px 0;

    .slick-track {
        padding: 12px 0;
    }

    .slick-slide > div {
        margin: 0 12px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }
`

export default MainReview;