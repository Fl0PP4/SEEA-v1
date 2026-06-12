import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, senha });
    
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <span className="fish-icon">🌊</span>
          <h1>SEEA</h1>
        </div>

        <h2>Bem-vindo de volta</h2>
        <p className="subtitle">Faça login para continuar comprando ou vendendo frutos do mar frescos</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit">Entrar</button>
        </form>

        <div className="login-footer">
          <a href="#">Esqueci minha senha</a>
          <p>
            Não tem conta? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
}