// src/components/shared/LoginForm.tsx
import React, { useState } from "react";

type Props = {
  onClose: () => void;
};

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 1000);
      } else {
        setMessage(data.error);
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-green-600 text-white py-2 px-4 w-full rounded"
        >
          Login
        </button>
        <button onClick={onClose} className="text-red-500 mt-2 w-full text-sm">
          Cancel
        </button>
        {message && <p className="mt-2 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
