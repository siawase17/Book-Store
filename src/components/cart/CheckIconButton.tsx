import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import styled from "styled-components";

interface Props {
    isChecked: boolean;
    onCheck: () => void;
};

const CheckIconButton = ({isChecked, onCheck}: Props) => {
    return (
        <CheckIconButtonStyle onClick={onCheck}>
            {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
        </CheckIconButtonStyle>
    )
};

const CheckIconButtonStyle = styled.button`
    background: none;
    border: 0;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        margin-top: 3px;
    }
`

export default CheckIconButton;