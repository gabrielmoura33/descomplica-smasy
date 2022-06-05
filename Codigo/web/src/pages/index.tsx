/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import logoImg from '../assets/images/logo_primary.svg';
import Button from '../components/Button';
import StudentAnimation from '../components/StudentAnimation';
// import { useAuth } from '../context/AuthContext';
import { Container } from '../styles/pages/signUpPage';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Descomplica - Smasy</title>
      </Head>
      <Container>
        <section className="form">
          <Image src={logoImg} alt="Descomplica - Smasy" />

          <form>
            <Button type="button" onClick={() => Router.push('/alunos')}>
              Acessar
            </Button>
          </form>
        </section>

        <StudentAnimation></StudentAnimation>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const { ['artemis.token']: token } = parseCookies(ctx);

  // if (token) {
  //   return {
  //     redirect: {
  //       destination: '/doacoes',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};
