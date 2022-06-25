import React, { useState } from 'react'

function Form() {
    const [username, setUsername] = useState("");

    const onChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = e;
        setUsername(value);
    }

    // 이벤트가 어디서왔는가 React.FormEvent 
    // 어떤 element가 이벤트를 발생시키는지 체크 <HTMLFormElement>
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`form submitted, hello ${username}`)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="username" value={username} onChange={onChangeUsername} />
            <button>Login</button>
        </form>
    );
}

export default Form;