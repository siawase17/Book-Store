import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";


const Home = () => {
    const { reviews } = useMain();

    return (
        <>
            <MainReview reviews={reviews} />
        </>
    )
};

export default Home;