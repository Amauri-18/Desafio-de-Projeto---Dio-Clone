import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

import DioBg from "../../assets/Dio-bg.png"

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from "./styles";

const Card = () => {


    return (
        <CardContainer>
            <ImageBackground src={DioBg} />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/104802393?v=4" />
                    <div>
                        <h4>Amauri Pereira</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>
                        Projeto feito para o curso de HTML e CSS no bootcampo DIO XP...<strong>Saiba mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10 <FiThumbsDown /> 2
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card