import styled from "styled-components";
import theme from "styles/theme";

export const Input = styled.input`
 font-family: "RubikRegular", sans-serif;
 background: ${({ backgroundColor }) =>
  backgroundColor ? backgroundColor : theme.color.focusInput};
 height: 33px;
 border: none;
 border-bottom: ${({ borderBottom }) =>
  borderBottom && ` solid 0.5px ${theme.color.grayDefaultColor}`};
 color: ${theme.color.textInput};
 width: 100%;
 border-radius: ${({ borderRadius }) =>
  borderRadius ? borderRadius : `8px 8px 0 0`};
 padding-left: ${({ iconInput }) => (iconInput ? `40px` : `13px`)};
 font-size: 16px;
 margin-top: 5px;
 &:hover {
  border-color: ${theme.color.labelDefault};
 }
 &:focus {
  border-color: ${theme.color.labelDefault};
 }
`;

export const InputRow = styled.div`
 text-align: left;
 ${({ mb }) => (mb ? `margin-bottom: ${mb}em` : "")};
 ${({ mt }) => (mt ? `margin-top:${mt}em` : "")};
 ${({ mr }) => (mr ? `margin-right:${mr}em` : "")};
 ${({ ml }) => (ml ? `margin-left:${ml}em` : "")};
 ${({ margin }) => (margin ? `margin: ${margin}` : "")};
 width: ${({ width }) => (width ? width : "100%")};
 ${({ backgroundColor }) =>
  backgroundColor && `background-color:${backgroundColor}`}
`;

export const LabelInput = styled.label`
 font-size: ${({ size }) => (size ? `${size}em` : `1em`)};
 color: ${({ color }) => (color ? `${color}` : theme.color.labelDefault)};
 margin-bottom: 0px;
`;
