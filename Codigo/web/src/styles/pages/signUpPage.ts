import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    form {
      margin-top: 100px;
      h1 {
        font-size: 32px;
        margin-bottom: 32px;
        color: #737380;
      }
    }
  }
`;

export const Backlink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
