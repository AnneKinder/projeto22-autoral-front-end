import { styled } from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const URLPOST = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [isDisabled, setIsDisabled] = useState(false)


  function handleSignIn(e) {
    e.preventDefault();
    setIsDisabled(true)

    axios
    .post(`${URLPOST}auth/signin`, loginUser)
    .then((res) => {     
      setUser(res.data);
      navigate("/home");
      setIsDisabled(false)
    })
    .catch((err) => {
      alert(err);
      setIsDisabled(false)
    });

  }

  return (
    <Container>

      <SidebarSty>
        <div>
        <h2>not if,</h2>
          <h1>when</h1>
        </div>
      </SidebarSty>


      <SignInSty>
        <form onSubmit={handleSignIn}>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={(email) =>
              setLoginUser({ ...loginUser, email: email.target.value })
            }
            value={loginUser.email}
            data-test="email"
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={(password) =>
              setLoginUser({ ...loginUser, password: password.target.value })
            }
            value={loginUser.password}
            data-test="password"
          />
          <button type="submit" data-test="login-btn" disabled={isDisabled}>log in</button>
        </form>
        <p data-test="sign-up-link" onClick={() => navigate("/signup")}>
          first time? start now!
        </p>
      </SignInSty>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    height:667px;

    div{
      text-align: center;
    }
  }
`;

const SidebarSty = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100vw;
  background-color: #DFB3B8;
  font-family: 'Galdeano', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #FFFFFF;

  div{
    margin: 300px 0 0 110px;
  }

  h1{
    font-family: 'Barrio', cursive;
    font-size: 100px;
    line-height: 117px;
    width: 233px;
  }

  h2{
    font-family: 'Galdeano', sans-serif;
    font-size: 43px;
    line-height: 64px;
    width: 442px;
  }

    @media (max-width: 1000px) {
      width: 100%;
      height: 25%;

      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0 0;
      }

      h1{
        font-size: 76px;
        line-height: 75px;
        width: 40%;
      }

      h2{
        text-align: center;
        font-size: 23px;
        line-height: 30px;
        width: 80%;
      }

    }

`;

const SignInSty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Galdeano', sans-serif;
  width:45vw;
  background-color: #a2c1ba;


  form {
    display: flex;
    flex-direction: column;
    margin: 300px 0 0 0;
  }

  input {
    width: 429px;
    height: 65px;
    left: 956px;
    top: 317px;
    background: #FFFFFF;
    border-radius: 6px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #9F9F9F;
    margin-bottom: 12px;
    padding:18px;
  }

  button {
    width: 429px;
    height: 65px;
    background: #DFB3B8;
    border-radius: 6px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom: 22px;
    border-color: transparent;
  }

  p {
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
  }


  @media (max-width: 1000px) {
    width: 100%;
    height:75%;

    form {
    margin: 40px 0 0 0;
  }

  input {
    width: 330px;;
    height: 55px;
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 11px;
    padding:10px;
  }

  button {
    width: 330px;
    height: 55px;
    font-size: 22px;
    line-height: 33px;
    margin-bottom: 22px;
  }

  p {
    font-size: 17px;
    line-height: 20px;
  }

  }


`;