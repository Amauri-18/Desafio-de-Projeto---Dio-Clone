import { useNavigate } from "react-router-dom"
import { MdOutlinePersonOutline, MdEmail, MdLock } from "react-icons/md"

import Header from "../../components/Header"
import Button from "../../components/Button"
import Input from "../../components/Input"

import {
    Column,
    Container,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    DisclaimerText,
    HasAccount
} from "./style"

const Register = () => {

    const navigate = useNavigate()

    const handleRegister = () => {

        navigate("/feed")
    }

    return (

        <>
        <Header />
        <Container>
            <Column flex={2}>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
         
            </Column>
            <Column flex={1}>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change...</SubtitleLogin>
                    <form>
                        <Input placeholder="Nome Completo" type="text" leftIcon={<MdOutlinePersonOutline /> } />
                        <Input placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" onClick={handleRegister} type="button" />
                    </form>
                    <Row>
                    <DisclaimerText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Politicas
                        de Privacidade e os Termos de Uso da DIO.
                    </DisclaimerText>                        
                    </Row>
                    <Row>
                        <HasAccount>
                            Já tenho uma conta. <span onClick={() => navigate("/login")}>Fazer login</span>
                        </HasAccount>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export default Register