import React from 'react';
import { styled } from 'styled-components';
import { ButtonSheme, ButtonSize } from '../../style/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonSheme;
    disabled?: boolean;
    isLoading?: boolean;
}

const Button = ({ children, size, scheme, disabled, isLoading, ...props }: Props) => {
    return (
        <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} {...props}>
            {children}
        </ButtonStyle>
    )
};

const ButtonStyle = styled.button<Omit<Props, "children">> `
    font-size: ${({ theme, size }) => theme.heading[size].fontSize};
    padding: ${({ theme, size }) => theme.button[size].padding};
    padding-top: 12px;
    color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
    background-color: ${({ theme, scheme }) => theme.buttonScheme[scheme].backgroundColor};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`

export default Button