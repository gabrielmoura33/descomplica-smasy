/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../assets/images/logo_primary.svg';
import Button from '../components/Button';
import Input from '../components/Input';
import StudentAnimation from '../components/StudentAnimation';
import toast from '../components/Toast';
// import { useAuth } from '../context/AuthContext';
import { Backlink, Container } from '../styles/pages/signUpPage';
import theme from '../styles/theme';

interface LoginProps {
  email: string;
  password: string;
}
export default function SignIn() {
  const { register, handleSubmit, reset } = useForm();
  // const { login } = useAuth();

  const handleLogin = useCallback(
    async ({ email, password }: LoginProps) => {
      try {
        console.log(email, password);
        // const user = await login(email, password);
        // if (!user.user.emailVerified) {
        //   toast({
        //     type: 'error',
        //     message: 'Por favor confirmar seu e-mail para acessar',
        //   });
        // return;
        // }
        // toast({
        //   type: 'success',
        //   message: 'Usuário Logado!',
        // });
      } catch (error: any) {
        if (error.code === 'auth/wrong-password') {
          return toast({
            type: 'error',
            message: 'Combinação de usuário e senha incorretos!',
          });
        }

        toast({
          type: 'error',
          message:
            'Ocorreu um erro ao se conectar, entre em contato com um administrador do sistema',
        });
      } finally {
        reset();
      }
    },
    [reset]
  );
  return (
    <>
      <Head>
        <title>Descomplica - Smasy</title>
      </Head>
      <Container>
        <section className="form">
          <Image src={logoImg} alt="Descomplica - Smasy" />

          <form onSubmit={handleSubmit(handleLogin as any)}>
            <h1>Faça seu login</h1>
            <Input
              nameRef="email"
              type="text"
              placeholder="E-mail"
              register={register}
            />

            <Input
              type="password"
              placeholder="Senha"
              register={register}
              nameRef="password"
            />

            <Button type="submit">Entrar</Button>

            <Link href="cadastro">
              <Backlink>
                <FiLogIn
                  size={16}
                  color={theme.colors.primary}
                  style={{ marginRight: 19 }}
                />
                Não tenho cadastro
              </Backlink>
            </Link>
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
