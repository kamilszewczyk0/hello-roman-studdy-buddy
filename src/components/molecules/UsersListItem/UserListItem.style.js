import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  min-height: 90px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledAverage = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ children, theme }) => {
    return parseFloat(children) < 3 ? theme.colors.error : parseFloat(children) < 4 ? theme.colors.warning : theme.colors.success;
  }};
`;

export const StyledContent = styled.div`
  margin: 0 14px 0 24px;
`;

export const StyledHeader = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`;

export const StyledAttendace = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
