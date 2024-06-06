import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

const Error = () => {
    const error = useRouteError() as RouteError;

    return (
        <div>
            <h2>다음과 같은 오류가 발생했습니다.</h2>
            <h3>{error.statusText || error.message}</h3>
        </div>
    )
}

export default Error