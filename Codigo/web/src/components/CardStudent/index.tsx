import Image from 'next/image';
import React from 'react';
// import { Container } from './styles';
import editIcon from '../../assets/icons/edit-24.svg';
import trashIcon from '../../assets/icons/trash-24.svg';
import { Container } from './styles';
const CardStudent: React.FC = () => {
  return (
    <Container>
      <div className="id column">1</div>
      <div className="donators column">
        <span>Aluno</span>
        <strong>Gabriel de Moura e Souza</strong>
      </div>
      <div className="amount column">
        <span>E-Mail</span>
        <p>gabrielmoura.music@gmail.com</p>
      </div>
      <div className="amount column">
        <span>CPF</span>
        <p>116.064.996-02</p>
      </div>
      <div className="deadline column">
        <span>Data</span>
        <p>Há 13 dias</p>
      </div>

      <div className="actions column flex">
        <a href="" className="btn white edit" title="Editar doação">
          <Image src={editIcon} alt="Editar doação" />
        </a>
        <button
          className="delete btn white"
          title="Excluir doação"
          type="button"
        >
          <Image src={trashIcon} alt="Excluir doação" />
        </button>
      </div>
    </Container>
  );
};

export default CardStudent;
