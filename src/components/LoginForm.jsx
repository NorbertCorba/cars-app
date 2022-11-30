import React from "react";

export default function LoginForm({ handleOnLogin, user, setUser }) {
    return (
        <form onSubmit={handleOnLogin}>
            <label>
                Email:
            </label>
            <input
                required
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={({ target }) => setUser({ ...user, email: target.value })}
            >
            </input>

            <label>
                Password:
            </label>
            <input
                required
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={({ target }) => setUser({ ...user, password: target.value })}

            >
            </input>
            <button type="submit" className="button">Login</button>
        </form>
    )
}

