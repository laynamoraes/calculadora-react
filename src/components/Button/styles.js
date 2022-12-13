import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 15px 20px;
    border: 1px solid #a3a3a5;
    background-color: #dfe1e5;
    color: #3d403a;
    font-size: 24px;
    font-weight: 600;
    flex: 1;

    ${({variant})=> variant !== "primary" && css`
        background-color: #fd9240;
        color: #FFFFFF;
    `}


    ${({sizeZero})=> sizeZero === "2" && css`
        flex: 3.55;
        border-bottom-left-radius: 10px;
    `}
    

    ${({sizeAc})=> sizeAc === "3" && css`
        flex: 6.1;
    `}

    ${({styleEqual})=> styleEqual === "equal" && css`
        border-bottom-right-radius: 10px;
    `}



    &:hover {
        opacity: 0.5;
    }
`