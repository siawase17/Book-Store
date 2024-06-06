import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
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
            <InputText placeholder="입력"/>
            <div>Home</div>
        </>
    )
};

export default Home;