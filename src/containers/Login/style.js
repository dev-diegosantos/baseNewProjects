import styled from "styled-components";
import LogoImg from "../../assets/images/logo.jpg";

export const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 padding: 15px;
`;

export const ContainerCard = styled.div`
 width: 390px;
 background: #fff;
 border-radius: 10px;
 padding: 0px 55px 33px;
 box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const LogoCompany = styled.div`
 width: 100%;
 height: 200px;
 background-image: url(${LogoImg});
 background-repeat: no-repeat;
 background-position: center;
 background-size: contain;
`;

export const ContainerForm = styled.div`
 margin-top: 15px;
`;
