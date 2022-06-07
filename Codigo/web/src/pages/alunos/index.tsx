/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import plusIcon from '../../assets/icons/plus-24.svg';
import logoImg from '../../assets/images/logo_secondary.svg';
import userImage from '../../assets/images/me.png';
import CardStudent from '../../components/CardStudent';
import { DeleteModal } from '../../components/DeleteModal';
import { Loading } from '../../components/Loading';
import SearchInput from '../../components/SearchInput';
import toast from '../../components/Toast';
import {
  useGetStudentsQuery,
  useRemoveStudentMutation,
} from '../../graphql/generated/graphql';
import { useDebounce } from '../../hooks/useDebounce';
import { withApollo } from '../../lib/withApollo';
import styles from '../../styles/pages/student-list.module.scss';

function StudentsListPage() {
  const [search, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [removeStudent] = useRemoveStudentMutation();
  const debouncedSearchTerm = useDebounce(search, 500);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState('');

  const { data, refetch } = useGetStudentsQuery({
    variables: {
      search: debouncedSearchTerm,
    },
  });

  useEffect(() => {
    async function handleSearch() {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        await refetch();
        setIsSearching(false);
      } else {
        setIsSearching(false);
      }
    }

    handleSearch();
  }, [debouncedSearchTerm, refetch]);

  async function handleDeleteEntry() {
    try {
      await removeStudent({
        variables: {
          id: deleteId,
        },
      });

      toast({
        type: 'success',
        message: 'Aluno(a) deletada com sucesso!',
      });
      setModalVisible(false);
      refetch();
    } catch (error) {
      toast({
        type: 'error',
        message: 'Ops! Ocorreu um erro ao deletar registro!',
      });
    }
  }
  return (
    <>
      <DeleteModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDelete={() => handleDeleteEntry()}
      ></DeleteModal>
      {isSearching && <Loading></Loading>}
      <Head>
        <title>Descomplica - Smasy</title>
      </Head>
      <header className={styles.header}>
        <div className={styles['container']}>
          <section id="top" className="animate-up z-15">
            <Image src={logoImg} alt="Descomplica Smasy" id="logo" />
            <a className={`${styles['avatar-profile']} relative`}>
              <p>
                Gabriel Moura <span>Ver perfil</span>
              </p>
              <Image
                src={userImage}
                width={64}
                height={64}
                alt="Perfil do usuário"
              />
              <div className={styles['search-input-wrapper']}>
                <SearchInput
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Buscar..."
                ></SearchInput>
              </div>
            </a>
          </section>

          <section
            className="animate-up delay-1"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          >
            <div className={styles['info']}>
              <div className={styles['total']}>
                <strong>{data?.students.length ?? 0}</strong>
                Alunos ao total
              </div>
            </div>

            <Link href="/alunos/cadastrar">
              <a className={`${styles.btn} ${styles.black}`}>
                <span>
                  <Image src={plusIcon} alt="Novo aluno" />
                </span>
                Adicionar aluno
              </a>
            </Link>
          </section>
        </div>
      </header>
      <div className={styles.container}>
        <main className="animate-up delay-2">
          <div className={styles.cards}>
            {data?.students.map((el, index) => (
              <CardStudent
                key={el.id}
                student={
                  {
                    ...el,
                    index: index + 1,
                  } as any
                }
                setModalVisible={() => {
                  setModalVisible(true);
                  setDeleteId(el.id);
                }}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default withApollo(StudentsListPage);
