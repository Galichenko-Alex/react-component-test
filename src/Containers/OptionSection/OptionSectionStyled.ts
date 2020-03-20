import styled from 'styled-components'

type IOptionSectionWrap = {
    textColor?: string;
    bgColorSection?: string;
}

type IOptionSectionToggle = {
    bgColorOptionSection?: string;
}

export const OptionSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 471px;
  padding: 38px 47px 67px 35px;
  font-family: Avenir Next;
  line-height: 25px;
  text-align: left;
  background-color: ${({ bgColorSection }: IOptionSectionWrap) => bgColorSection || '#fff'};
  color: ${({ textColor }: IOptionSectionWrap) => textColor || '#000'};
  box-sizing: border-box;
  
  * {
      ${({ textColor }) => textColor && `color: ${textColor} !important`};
      box-sizing: border-box;
  }
`;

export const OptionSectionTitle = styled.h3`
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: left;
`;

export const OptionSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
`;

export const OptionSectionSubTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
`;

export const OptionSectionToggle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 20px;
    margin-top: 16px;
    background: ${({ bgColorOptionSection }: IOptionSectionToggle) => bgColorOptionSection || '#F5F5F5'};
    border-radius: 10px;
`;

export const OptionSectionToggleText = styled.div`
     margin-right: 16px;
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    word-break: break-word;
`;

export const OptionSectionDescription = styled.p`
    width: 100%;
    max-width: 336px;
    margin: 0 auto;
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    color: #515151;
`;
