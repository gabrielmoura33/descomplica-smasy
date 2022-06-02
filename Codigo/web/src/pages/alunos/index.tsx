/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import plusIcon from '../../assets/icons/plus-24.svg';
import logoImg from '../../assets/images/logo_secondary.svg';
import CardStudent from '../../components/CardStudent';
import { Container, Header } from '../../styles/pages/StudentsListPage';

function StudentsListPage() {
  // const { data, loading, refetch } = useGetAnimalsQuery();
  // const [modalVisible, setModalVisible] = useState(false);
  // const [deleteId, setDeleteId] = useState('');
  // const [removeAnimal] = useRemoveAnimalMutation();
  async function handleDeleteEntry() {
    // try {
    //   await removeAnimal({
    //     variables: {
    //       id: deleteId,
    //     },
    //   });
    //   toast({
    //     type: 'success',
    //     message: 'Animal deletado com sucesso!',
    //   });
    //   setModalVisible(false);
    //   refetch();
    // } catch (error) {
    //   toast({
    //     type: 'error',
    //     message: 'Ops! Ocorreu um erro ao deletar registro!',
    //   });
    // }
  }
  return (
    <>
      {/* <DeleteModal
        isVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleDelete={() => handleDeleteEntry()}
      ></DeleteModal> */}
      {/* {loading && <Loading></Loading>} */}
      <Head>
        <title>Descomplica - Smasy</title>
      </Head>
      <Header className="page-header">
        <div className="container">
          <section id="top" className="animate-up z-15">
            <Image src={logoImg} alt="Be The hero" />
            <a id="avatar-profile">
              <p>
                Gabriel Moura <span>Ver perfil</span>
              </p>
              <img src="https://github.com/gabrielmoura33.png" />
            </a>
          </section>

          <section id="summary" className="animate-up delay-1">
            <div className="info">
              <div className="total">
                <strong>12</strong>
                Alunos ao total
              </div>
            </div>

            <Link href="/cadastrar-animal">
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
            <CardStudent />
            <CardStudent />
            <CardStudent />
          </div>
        </main>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const { ['artemis.token']: token } = parseCookies(ctx);

  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};

export default StudentsListPage;
