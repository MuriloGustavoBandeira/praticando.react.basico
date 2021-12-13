import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 326px;
    height: 285px;
    margin: 40px auto;
    padding: 20px;

    label {
        display: inline-block;
        margin: 5px;
    }

    input {
        border-radius: 3px;
        border: 1px solid black;
        padding: 10px;
        width: 300px;
        margin: 2px 2px 2px 2px;
    }

    button {
        background-color: black;
        padding: 10px;
        color: white;
        margin: 15px 2px 2px 2px;
        width: 323px;
        border: none;
        border-radius: 3px;
        font-size: 17px;
        &:hover {
            background-color: #2B2828;
        }
    }
`;

const H1 = styled.h1 `
    display: block;
    text-align: center;
    margin-top: 100px;
`;

export default function Formulario() {
    return(
        <div>
            <H1>Cadastre-se</H1>
            <Form>     
                <label for='Nome'>Nome</label><br></br>
                <input type='text' title='digite o nome' required/><br></br>
            
            
                <label for='E-mail'>E-mail</label><br></br>
                <input type='email' title='digite o e-mail' required/><br></br>
            
            
                <label for='Senha'>Senha</label><br></br>
                <input type='password' title='digite a senha' required/><br></br>
            
                <button type='submit'>
                    Cadastrar
                </button>
            </Form>
        </div>
    )
}