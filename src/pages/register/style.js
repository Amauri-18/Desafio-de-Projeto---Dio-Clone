import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Wrapper = styled.div`
    max-width: 300px;
    padding: 10px;
`

export const Column = styled.div`
    flex: ${({flex}) => flex};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2` 
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p` 
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`   
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const DisclaimerText = styled.p`
    font-style: normal;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`

export const ForgotText = styled.p`  
    font-style: normal;
    font-size: 14px;
    line-height: 19px;

    color: #E5E044;
`

export const CreateText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #E23DD7;
`

export const HasAccount = styled.p`
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;

    span {
        font-weight: 700;
        color: rgb(33, 216, 119);
        cursor: pointer;
    }

`
