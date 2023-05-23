import styled from '@emotion/styled';

export const UlList = styled.ul`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  /* border-left: 1px solid #c9a66b;
  border-right: 1px solid #c9a66b; */
`;
export const LiItem = styled.li`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #c9a66b;
`;
export const SpanIcon = styled.span`
  svg {
    width: 30px;
    height: 30px;
    color: ${props => props.inputColor || 'palevioletred'};
  }
`;

export const SpanName = styled.span`
  color: #c9a66b;
  font-weight: 500;
  font-size: 24px;
`;

export const SpanNumber = styled.span`
  color: #af4425;
  font-weight: 500;
  font-size: 24px;
`;

export const ButtonDlt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  color: #686868;
  border-radius: 50%;
  border-color: transparent;
  outline: none;
  transition: transform 250ms ease-in;
  :hover,
  :focus {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    width: 24px;
    height: 24px;
    transition: transform 250ms linear;
  }
`;
