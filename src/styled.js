import styled from 'styled-components';

export const Block = styled.p`
    display: flex;
    height: 45px;
    border: 4px solid #DAA520;
    border-radius: 25px;
    margin-left: 350px;
    margin-right: 350px;
    margin-bottom: 20px;
    color: black;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    background-color: ${({ selected }) => (selected ? "#FFE4C4" : "#F0F9FF")};
    background-image: url('/src/assets/quotation.png');
    background-position-x: 30%;
    background-repeat: no-repeat;
    background-size: 60px;
    opacity: 0.9;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    height: 100px;
    width: 100px;
    margin: 20px;
    background: transparent;
    border: 3px solid #DAA520;
    border-radius: 50px;
    text-align: center;
`;

export const SwitchImages = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: cover;
    transition: .4s ease-out;
`;