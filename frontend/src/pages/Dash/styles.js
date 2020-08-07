import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
    background: #f7fff7;
    width: 100%;

    * {
    outline: none;
    }

    input {
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    }

    table td {
    border: 1px solid #ccc;
    padding: 5px;
    }

    h1 {
        font-size: 30px;
        color: #666666;
        font-family: sans-serif;
    }

    strong {
        font-size: 18px;
        color: #666666;
        font-family: sans-serif;
        margin-left: 5px;
    }
`;

export const Title = styled.strong`
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
`;

export const FormInput = styled.input`
    width: 200px;
    height: 30px;
    background: #edf2f4;
    color: #666666;
    margin: 8px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid rgba(242, 244, 250, 1);
    
    ::placeholder {
        color: #666666;
    }
`;

export const SendButton = styled.button`
    margin: 5px 0 0;
    width: 100px;
    height: 40px;
    background: #2a9d8f;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

        &:hover {
            background: ${darken(0.03, '#2a9d8f')}
        }  
`;