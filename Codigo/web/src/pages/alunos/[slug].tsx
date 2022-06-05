/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import * as yup from 'yup';
import logoImg from '../../assets/images/logo_primary.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Loading } from '../../components/Loading';
import toast from '../../components/Toast';
import {
  useGetStudentBySlugQuery,
  useUpdateStudentMutation,
} from '../../graphql/generated/graphql';
import { withApollo } from '../../lib/withApollo';
import { Container } from '../../styles/pages/NewStudent';
import theme from '../../styles/theme';
interface UpdateStudentProps {
  name: string;
  email: string;
  cpf: string;
}

const cpfRegex = /^(\d{3}\.){2}\d{3}\-\d{2}$/;

const updateStudentSchema = yup.object({
  name: yup.string().required('Nome é Obrigatório'),
  email: yup.string().required('E-mail é Obrgatório').email('E-Mail inválido'),
  cpf: yup
    .string()
    .matches(cpfRegex, 'CPF inválido (000-000-000-00)')
    .required('CPF é obrigatório'),
});
function UpdateStudent() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, loading } = useGetStudentBySlugQuery({
    variables: { slug: (slug as string) ?? '' },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateStudentSchema),
  });
  const [updateStudent] = useUpdateStudentMutation();

  useEffect(() => {
    reset({
      name: data?.studentBySlug.name,
      cpf: data?.studentBySlug.cpf,
      email: data?.studentBySlug.email,
    });
  }, [reset, data]);
  // console.log(data);
  async function handleSubmitForm({ name, email, cpf }: UpdateStudentProps) {
    try {
      await updateStudent({
        variables: {
          id: data?.studentBySlug.id as string,
          name,
          cpf,
          email,
        },
      });
      toast({ type: 'success', message: `Aluno editado(a) com sucesso!` });
      reset();

      Router.push('/alunos');
    } catch (error) {
      console.log(error);
      toast({
        type: 'error',
        message: `Ops! Ocorreu um erro ao cadastrar animal, tente novamente mais tarde`,
      });
    }
  }
  return (
    <>
      <Head>
        <title>Smasy - Edição de aluno</title>
      </Head>
      {loading && <Loading></Loading>}
      <Container>
        <div className="content">
          <section>
            <Image src={logoImg} alt="Descomplica - Smasy" />
            <h1>Editar Aluno</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude a cadastrar novos
              alunos
            </p>
            <Link href="/alunos">
              <a className="backLink">
                <FiArrowLeft size={16} color={theme.colors.primary} />
                Voltar para Home
              </a>
            </Link>
          </section>
          <form onSubmit={handleSubmit(handleSubmitForm as any)}>
            <Input
              error={errors.name}
              placeholder="Nome"
              {...register('name')}
            />
            <Input
              error={errors.cpf}
              type="text"
              placeholder="CPF"
              {...register('cpf')}
            />
            <Input
              error={errors.email}
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />

            <div className="input-group">
              <Button type="submit">Editar</Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default withApollo(UpdateStudent);
