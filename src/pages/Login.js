import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    valiPass: false,
    valiEmail: false,
  };

  // confere se o botao esta valido para ser abilitado
  btnDisable = () => {
    const { valiEmail, valiPass } = this.state;
    return !(valiPass && valiEmail);
  };

  validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // atualiza o email no estado
  handleChangeEmail = ({ target }) => {
    const { value } = target;
    this.setState((prev) => ({
      ...prev,
      email: value,
    }));
    if (this.validateEmail(value)) {
      this.setState((prev) => ({
        ...prev,
        valiEmail: true,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        valiEmail: false,
      }));
    }
  };

  // atualiza a senha no estado
  handleChangePassword = ({ target }) => {
    const { value } = target;
    const six = 6;
    this.setState((prev) => ({
      ...prev,
      password: value,
    }));
    if (value.length < six) {
      this.setState((prev) => ({
        ...prev,
        valiPass: false,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        valiPass: true,
      }));
    }
  };

  // acao ao clicar em entrar
  onClickEntrar = () => {

  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
          value={ email }
          onChange={ this.handleChangeEmail }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handleChangePassword }
          value={ password }
        />
        <button
          disabled={ this.btnDisable() }
          // onClick={}
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
