import { Banner as IBanner } from "@/models/banner.model"
import BannerItem from "./BannerItem"
import { useMemo, useState } from "react"
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Props {
    banners: IBanner[]
};

const Banner = ({ banners }: Props) => {
    const [cur_index, setCur_index] = useState(0);

    const transFormValue = useMemo(() => {
        return cur_index * -100;
    }, [cur_index]);

    const handlePrev = () => {
        if (cur_index === 0) return;
        setCur_index(cur_index - 1);
    };
    const handleNext = () => {
        if (cur_index === banners.length - 1) return;
        setCur_index(cur_index + 1);
    };

    const handleIndicatorClick = (index: number) => {
        setCur_index(index);
    };

    return (
        <BannerStyle>
            <BannerContainerStyle $transFormValue={transFormValue}>
                {banners.map((item, index) => (
                    <BannerItem banner={item} />
                ))}
            </BannerContainerStyle>
            <BannerButtonStyle>
                <button className="prev" onClick={handlePrev}><FaAngleLeft /></button>
                <button className="next" onClick={handleNext}><FaAngleRight /></button>
            </BannerButtonStyle>
            <BannerIndicatorStyle>
                {banners.map((banner, index) => (
                    <span
                        className={index === cur_index ? 'active' : ''}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </BannerIndicatorStyle>
        </BannerStyle>
    )
};

const BannerStyle = styled.div`
    overflow: hidden;
    position: relative;
`

interface BannerContainerStyleProps {
    $transFormValue: number;
};

const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
    display: flex;
    transform: translate(${(props) => props.$transFormValue}%);
    transition: transform 0.5s ease-in-out;
`

const BannerButtonStyle = styled.div`
    button {
        border: 0;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 500px;
        font-size: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        svg {
            fill: #fff;
            cursor: pointer;
        }

        &.prev {
            left: 10px;
        }

        &.next {
            right: 10px;
        }

        @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
            width: 25px;
            height: 25px;
            font-size: 1.2rem;

            &.prev {
                left: 0;
            }

            &.next {
                right: 0;
            }
        }
    }
`

const BannerIndicatorStyle = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    span {
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 100px;
        background: #fff;
        margin: 0 4px;
        cursor: pointer;

        &.active {
            background: ${({ theme }) => theme.color.primary};
        }
    }

    @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
        bottom: 0;
        span {
            width: 10px;
            height: 10px;
            &.active {
            width: 20px;
        }
        }
    }
`

export default Banner;