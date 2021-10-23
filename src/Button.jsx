import styled from '@emotion/styled';

export const Button = styled.button(({area, type}) => {
  const backgroundColor = {
    primary: () => '#2B2B2B',
    secondary: () => '#111',
    highlight: () => 'rgb(220, 140, 0)',
  }[type]();

  const fontWeight = {
    primary: () => 'normal',
    secondary: () => 'lighter',
    highlight: () => 'normal',
  }[type]();

  return {
    backgroundColor,
    fontWeight,
    gridArea: area,
    border: '1px solid #414141',
    color: '#fdfdfd',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '1.6em',
    height: '3em',
    ':hover': {
      backgroundColor: 'rgba(88, 88, 88, 0.75)',
    },
  };
});
