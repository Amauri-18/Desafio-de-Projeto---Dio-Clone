import { Link } from "react-router-dom";

import Button from "../Button";

import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

import logo from "../../assets/logo-dio.png";
 
const Header = ({ authenticated }) => {

    return (

        <Wrapper>
            <Container>
                <Row>
                    <Link to="/">
                        <img src={logo} alt="Logo da DIO"/>        
                    </Link>
                    {authenticated ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder="Buscar..." />
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>                        
                        </>
                    ) : null }
                </Row>
                <Row>
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />                        
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header