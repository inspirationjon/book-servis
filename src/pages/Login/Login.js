import useToken from '../../hooks/useToken'

function Login() {
    const [setToken] = useToken(true)

    function handleSubmit(evt) {
        evt.preventDefault()

        const { username, password } = evt.target.elements

        fetch('http://192.168.0.155:4001/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })
            .then((data) => data.json())
            .then((data) => {
                setToken(data.token)
                console.log(data)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <h1>Login</h1>

            <form method='POST' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' placeholder='username..' />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='username..'
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Login
