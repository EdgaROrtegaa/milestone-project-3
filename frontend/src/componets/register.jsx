function Register() {
    return (
        <div><h1>register</h1>
            <form action="/register" method="POST">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                        required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                        required />
                </div>
                <button type="submit">Register</button>
            </form>
            <a href="/login"></a>
        </div>
    )
}


