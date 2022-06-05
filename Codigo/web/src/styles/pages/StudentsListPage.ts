import styled, { keyframes } from 'styled-components';

const animateUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 3rem;

  .inner {
    height: 5.5rem;
    margin-bottom: 4rem;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .inner h1 {
    margin: 0 auto;

    line-height: 1.625rem;

    color: var(--color-header-inner-title);
  }

  #avatar-profile {
    display: flex;
    align-items: center;
    color: var(--color-white);
    text-decoration: none;

    font-family: IBM Plex Sans;
    text-align: right;
  }

  #avatar-profile p {
    font-size: 1.25rem; /* 20px of 16px root*/
    line-height: 1.875rem; /*30px of 16px root*/
    margin-right: 1.25rem;

    font-weight: 600;
    color: #fff;
  }

  #avatar-profile span {
    display: block;

    font-weight: normal;
    font-size: 0.875rem; /* 14px of 16px root*/
    line-height: 1.5rem; /* 24px of 16px root*/

    font-weight: 400;
  }

  #avatar-profile p span:hover {
    text-decoration: underline;
    color: var(--color-secondary);
  }

  #avatar-profile img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.156rem solid #000;
  }
  .container {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;

    section {
      display: flex;
      justify-content: space-between;
    }
  }

  /*
 * summary
/* -------------------------------------------------- */
  #summary {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /*
 * summary info
/* -------------------------------------------------- */
  #summary .info {
    display: flex;
    font-family: Inter;

    margin-bottom: 2rem;
  }

  .info > div {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.625rem;

    margin-right: 2.5rem; /* 40px of 16px root*/
  }

  .info > div > strong {
    display: block;

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.625rem; /* 26px of 16px root*/
    color: #fff;
  }

  /*
 * summary button
/* -------------------------------------------------- */
  .btn {
    padding: 0.75rem 3rem;
    border-radius: 0.313rem;
    border: 0;

    font-family: IBM Plex Sans;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.625rem;
    text-transform: uppercase;

    transition: all 0.2s;

    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .btn.black {
    background: #000;
    color: #fcfdff;
  }

  .btn.black:hover {
    background: #fa9c2d;
  }
  #summary .btn {
    padding: 0.75rem 1.25rem 0.75rem 0.75rem;
    margin-bottom: 2.5rem;
  }

  #summary .btn span::before {
    width: 2rem;
    height: 2rem;
    content: ' ';

    opacity: 0.16;
    border-radius: 0.313rem; /* 5px of 16px root*/

    position: absolute;
  }

  #summary .btn span {
    width: 2rem;
    height: 2rem;

    margin-right: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #summary .btn column img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .animate-up-header {
    transform: translateY(35px);
    opacity: 0;

    animation: ${animateUp} 300ms forwards;
    animation-delay: 100ms;
  }
`;

export const Container = styled.div`
  width: min(1440px, 90vw);
  margin: 0 auto;
  main {
    margin-top: -2.825rem;
    position: relative;
    z-index: 0;
  }

  .animate-up-content {
    transform: translateY(35px);
    opacity: 0;

    animation: ${animateUp} 300ms forwards;
    animation-delay: 100ms;
  }

  /* @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  } */
`;
