/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import plusIcon from '../../assets/icons/plus-24.svg';
import logoImg from '../../assets/images/logo_secondary.svg';
import userImage from '../../assets/images/me.png';
import CardStudent from '../../components/CardStudent';
import { DeleteModal } from '../../components/DeleteModal';
import { useGetStudentsQuery } from '../../graphql/generated/graphql';
import { withApollo } from '../../lib/withApollo';
import { Container, Header } from '../../styles/pages/StudentsListPage';
// interface StudentsListProps {
//   data: GetStudentsQuery;
// }
function StudentsListPage() {
  const [search, setSearch] = useState('');
  const { data, loading } = useGetStudentsQuery({
    variables: {
      search: search,
    },
  });

  return (
    <>
      <DeleteModal
      // isVisible={modalVisible}
      // setModalVisible={setModalVisible}
      // handleDelete={() => handleDeleteEntry()}
      ></DeleteModal>
      {/* {loading && <Loading></Loading>} */}
      <Head>
        <title>Descomplica - Smasy</title>
      </Head>
      <Header className="page-header">
        <div className="container">
          <section id="top" className="animate-up-header z-15">
            <Image src={logoImg} alt="Descomplica Smasy" />
            <a id="avatar-profile">
              <p>
                Gabriel Moura <span>Ver perfil</span>
              </p>
              <Image src={userImage} width={64} height={64} />
            </a>
          </section>

          <section id="summary" className="animate-up-content delay-1">
            <div className="info">
              <div className="total">
                <strong>{data?.students.length ?? 0}</strong>
                Alunos ao total
              </div>
            </div>

            <Link href="/alunos/cadastrar">
              <a className="btn black">
                <span>
                  <Image src={plusIcon} alt="Novo aluno" />
                </span>
                Adicionar aluno
              </a>
            </Link>
          </section>
        </div>
      </Header>
      <Container>
        <main className="animate-up delay-2">
          <div className="cards">
            {data?.students.map((el, index) => (
              <CardStudent
                key={el.id}
                student={
                  {
                    ...el,
                    index: index + 1,
                  } as any
                }
              />
            ))}
          </div>
        </main>
      </Container>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({}) => {
//   const data = await getServerPageGetStudents(
//     {
//       variables: {
//         search: '',
//       },
//     },
//     {} as any
//   );

//   return {
//     props: data.props,
//     revalidate: 60 * 60, // 1 hour
//   };
// };

export default withApollo(StudentsListPage);
