import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const styles: any = {};

styles.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;
styles.Btn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  width: 250px;
  height: 50px;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    opacity: 0.6;
  }
`;
styles.Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamilies.SansSerif};
  font-size: 18px;
  font-weight: bold;
`;
styles.Image = styled.img``;

export default styles;
