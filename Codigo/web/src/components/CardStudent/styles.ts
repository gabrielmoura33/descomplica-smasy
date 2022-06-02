import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 25% 25% 20% 20% 10%;
  align-items: center;

  margin-bottom: 0.5rem;

  position: relative;

  transition: all 0.2s;

  &:hover {
    background: linear-gradient(
        90deg,
        rgba(117, 205, 219, 0.1) 0.45%,
        rgba(252, 253, 255, 0.1) 31.4%
      ),
      white;

    &::before {
      height: 100%;
    }
  }
  &::before {
    content: ' ';
    width: 0.25rem;
    height: 0%;
    background-color: rgba(117, 205, 219, 1);
    border-radius: 0.313rem 0 0 0.313rem;
    position: absolute;
    top: 0;
    left: -1px;
    transition: all 0.2s;
  }

  &:last-child {
    justify-self: flex-end;
  }

  .column > span {
    display: block;

    font-family: Inter;
    font-weight: 600;
    font-size: 0.75rem; /* 12px of 16px root*/
    text-transform: uppercase;

    color: #bfbfcc;
  }

  p {
    font-weight: 600;
  }

  .id {
    font-family: 'Roboto';
    font-weight: 600;
    /* color: var(--color-card-label); */
  }
  .name {
    /* font-family: IBM Plex Sans; */
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  @media (max-width: 1390px) {
    grid-template-columns: 5% 30% 20% 15% 17.25% 12.25%;
  }

  @media (max-width: 970px) {
    grid-template-columns: 31% 23% 13% 20.25% 12.25%;

    .column.id {
      display: none;
    }
  }
  @media (max-width: 770px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'lt rt'
      'lm rm'
      'lb rb';
    gap: 0.5rem;

    .column.id {
      display: none;
    }

    .column.name {
      grid-area: lt;
    }
    .column.deadline {
      grid-area: lm;
    }
    .column.amount {
      grid-area: lb;
    }
    .column.status {
      justify-self: end;
      grid-area: rt;
    }
    .column.actions {
      grid-area: rb;
    }
  }
  cursor: pointer;
  background: #fcfdff;
  border-radius: 0.313rem;
  border: 1px solid #e1e3e6;
  color: #5a5a66;

  padding: 1.5rem;

  text-align: left;
`;
