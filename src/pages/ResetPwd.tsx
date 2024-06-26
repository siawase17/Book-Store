import Title from '../components/common/Title'
import InputText from '../components/common/InputText'
import Button from '../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { resetPwd, resetRequest, signup } from '../api/auth.api'
import { useAlert } from '../hooks/useAlert'
import { SignupStyle } from './Signup'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth';

export interface SignupProps {
    email: string;
    pwd: string;
}

const ResetPwd = () => {
    const { userResetPwd, userResetRequest, resetRequested } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        resetRequested ? userResetPwd(data)
            : userResetRequest(data);;
    };

    return (
        <div>
            <Title size='large'>비밀번호 초기화</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText
                            placeholder='이메일을 입력하세요.'
                            inputType='email'
                            {...register('email', { required: true })} />
                        {errors.email && <p className='error-text'>이메일을 입력해주세요.</p>}
                    </fieldset>
                    {resetRequested && (
                        <fieldset>
                            <InputText
                                placeholder='비밀번호를 입력하세요.'
                                inputType='password'
                                {...register('pwd', { required: true })} />
                            {errors.pwd && <p className='error-text'>비밀번호를 입력해주세요.</p>}
                        </fieldset>
                    )}
                    <fieldset>
                        <Button type='submit' size='medium' scheme='primary'>
                            {resetRequested ? '비밀번호 초기화' : '초기화 요청'}
                        </Button>
                    </fieldset>
                </form>
            </SignupStyle>
        </div>
    )
}

export default ResetPwd;