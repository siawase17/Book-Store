import Title from '../components/common/Title'
import styled from 'styled-components'
import InputText from '../components/common/InputText'
import Button from '../components/common/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth'

export interface SignupProps {
    email: string;
    pwd: string;
}

const Signup = () => {
    const { userSignup } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        userSignup(data);
    };

    return (
        <div>
            <Title size='large'>회원가입</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText
                            placeholder='이메일을 입력하세요.'
                            inputType='email'
                            {...register('email', { required: true })} />
                        {errors.email && <p className='error-text'>이메일을 입력해주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <InputText
                            placeholder='비밀번호를 입력하세요.'
                            inputType='password'
                            {...register('pwd', { required: true })} />
                        {errors.pwd && <p className='error-text'>비밀번호를 입력해주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <Button type='submit' size='medium' scheme='primary'>
                            회원가입
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to='/reset'>비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </div>
    )
}

export const SignupStyle = styled.div`
    max-width: ${({ theme }) => theme.layout.width.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;
        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
        align-items: center;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`
export default Signup;