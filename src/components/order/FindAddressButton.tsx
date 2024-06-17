import React, { useEffect } from 'react'
import Button from '../common/Button';

interface Props {
    onCompleted: (address: string) => void;
};

const SCRIPT_URL = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

const FindAddressButton = ({ onCompleted }: Props) => {
    const handleOpen = () => {
        new window.daum.Postcode({
            oncomplete: (data: any) => {
                onCompleted(data.address as string);
            }
        }).open();
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = SCRIPT_URL;
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    }, []);

    return (
        <div>
            <Button
                type='button'
                size='small'
                scheme='normal'
                onClick={handleOpen}
            >
                주소 찾기
            </Button>
        </div>
    )
}

export default FindAddressButton;