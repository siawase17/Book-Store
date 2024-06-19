import { login, signup, resetPwd, resetRequest } from "@/api/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore"
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";
import { useState } from "react";

export const useAuth = () => {
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    // 상태
    const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();

    // 메소드
    const userLogin = (data: LoginProps) => {
        login(data).then((res) => {
            storeLogin(res.token);
            showAlert('로그인이 완료되었습니다.');
            navigate('/');
        }, (error) => {
            showAlert('로그인이 실패하였습니다.');
        })
    }

    const userSignup = (data: SignupProps) => {
        signup(data).then((res) => {
            showAlert('회원가입이 완료되었습니다.');
            navigate('/login');
        })
    }

    const userResetPwd = (data: SignupProps) => {
        resetPwd(data).then(() => {
            showAlert('비밀번호가 초기화되었습니다.');
            navigate('/login');
        });
    }

    const [resetRequested, setResetRequested] = useState(false);
    const userResetRequest = (data: SignupProps) => {
        resetRequest(data).then(() => {
            setResetRequested(true);
        });
    }

    // 리턴
    return { userLogin, userSignup, userResetPwd, userResetRequest, resetRequested };
}