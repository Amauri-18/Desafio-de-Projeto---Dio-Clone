
import Header from "../../components/Header";
import Card from "../../components/Card/index";
import UserInfo from "../../components/UserInfo";


import {
    Container,
    Column,
    Title,
    TitleHighlight
} from "./styles"

const Feed = () => {

    return (
        <>
            <Header authenticated={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />   
                    <Card />   
                    <Card />   
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 DA SEMANA</TitleHighlight>
                    <UserInfo percentual="35" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <UserInfo percentual="55" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <UserInfo percentual="95" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <UserInfo percentual="65" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <UserInfo percentual="25" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <UserInfo percentual="85" name="Amauri Pereira" image="https://avatars.githubusercontent.com/u/104802393?v=4" />
                </Column>
            </Container>        
        </>
    )
}

export default Feed