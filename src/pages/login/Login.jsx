import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock} from "react-icons/md";

import Button from "../../components/Button/index";
import Header from "../../components/Header/index";
import Input from "../../components/Input";

import { 
    Container,
    CreateText,
    ForgotText,
    Row,
    Column,
    Title,
    TitleLogin,
    SubtitleLogin,
    Wrapper
} from "./styles";

const Login = () => {

    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate("/feed");
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
             
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change...</SubtitleLogin>
                        <form>
                            <Input placeholder="Email" type="email" leftIcon={<MdEmail />} />
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" onClick={handleSignIn} type="button" />
                        </form>
                        <Row>
                            <ForgotText>Esqueci minha senha</ForgotText>
                            <CreateText onClick={() => navigate("/register")}>Criar conta</CreateText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login