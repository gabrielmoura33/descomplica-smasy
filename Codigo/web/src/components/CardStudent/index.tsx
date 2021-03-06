import Image from 'next/image';
import Router from 'next/router';
import React, { HTMLProps } from 'react';
// import { Container } from './styles';
import editIcon from '../../assets/icons/edit-24.svg';
import trashIcon from '../../assets/icons/trash-24.svg';
import { calculateDiferenceFromDate } from '../../utils/calculateInYears';
import styles from './card-student.module.scss';

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
  setModalVisible: () => void;
}
function CardStudent(props: CardStudentProps) {
  const { student, key, setModalVisible } = props;

  function handleEdit() {
    return Router.push(`/alunos/${student.slug}`);
  }
  return (
    <div className={styles['card-container']} key={key}>
      <div className={`${styles.id} ${styles.column}`}>{student.index}</div>
      <div className={`${styles.donators} ${styles.column}`}>
        <span>Aluno</span>
        <h2>{student.name}</h2>
      </div>
      <div className={`${styles.amount} ${styles.column}`}>
        <span>E-Mail</span>
        <p>{student.email}</p>
      </div>
      <div className={`${styles.amount} ${styles.column}`}>
        <span>CPF</span>
        <p>{student.cpf}</p>
      </div>
      <div className="deadline column">
        <span>Data</span>
        <p>{calculateDiferenceFromDate(student.createdAt)}</p>
      </div>

      <div className={`${styles.actions} ${styles.column} flex`}>
        <a
          onClick={handleEdit}
          className={`${styles.btn} ${styles.white} ${styles.edit}`}
          title="Editar aluno"
        >
          <Image src={editIcon} alt="Editar aluno" />
        </a>
        <button
          className={`${styles.btn} ${styles.white} ${styles.edit}`}
          title="Excluir aluno"
          type="button"
          onClick={setModalVisible}
        >
          <Image src={trashIcon} alt="Excluir aluno" />
        </button>
      </div>
    </div>
  );
}

export default CardStudent;
