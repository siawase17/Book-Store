import Button from "../components/common/Button";
import Title from "../components/common/Title";

const Home = () => {
    return (
        <>
            <Title size="small">
                제목 테스트
            </Title>
            <Button size='large' scheme="primary">
                버튼 테스트
            </Button>
            <div>Home</div>
        </>
    )
};

export default Home;