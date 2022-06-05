import Image from 'next/image';
import Router from 'next/router';
import React, { HTMLProps } from 'react';
// import { Container } from './styles';
import editIcon from '../../assets/icons/edit-24.svg';
import trashIcon from '../../assets/icons/trash-24.svg';
import { calculateDiferenceFromDate } from '../../utils/calculateInYears';
import { Container } from './styles';

export interface Student {
  index: number;
  name: string;
  cpf: string;
  email: string;
  createdAt: string;
  slug: string;
}
interface CardStudentProps extends HTMLProps<HTMLDivElement> {
  student: Student;
}
function CardStudent(props: CardStudentProps) {
  const { student, key } = props;

  function handleEdit() {
    return Router.push(`/alunos/${student.slug}`);
  }
  return (
    <Container key={key}>
      <div className="id column">{student.index}</div>
      <div className="donators column">
        <span>Aluno</span>
        <h2>{student.name}</h2>
      </div>
      <div className="amount column">
        <span>E-Mail</span>
        <p>{student.email}</p>
      </div>
      <div className="amount column">
        <span>CPF</span>
        <p>{student.cpf}</p>
      </div>
      <div className="deadline column">
        <span>Data</span>
        <p>{calculateDiferenceFromDate(student.createdAt)}</p>
      </div>

      <div className="actions column flex">
        <a
          onClick={handleEdit}
          className="btn white edit"
          title="Editar doação"
        >
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
}

export default CardStudent;
