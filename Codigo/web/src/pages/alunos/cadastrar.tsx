/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import * as yup from 'yup';
import logoImg from '../../assets/images/logo_primary.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import toast from '../../components/Toast';
import { useCreateStudentMutation } from '../../graphql/generated/graphql';
import { withApollo } from '../../lib/withApollo';
import styles from '../../styles/pages/new-student.module.scss';

interface NewStudentProps {
  name: string;
  email: string;
  cpf: string;
}

const cpfRegex = /^(\d{3}\.){2}\d{3}\-\d{2}$/;
const newStudentFormSchema = yup.object({
  name: yup.string().required('Nome é Obrigatório'),
  email: yup.string().required('E-mail é Obrgatório').email('E-Mail inválido'),
  cpf: yup
    .string()
    .matches(cpfRegex, 'CPF inválido (000-000-000-00)')
    .required('CPF é obrigatório'),
});
function NewStudent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newStudentFormSchema),
  });

  const [createStudent] = useCreateStudentMutation();

  async function handleSubmitForm({ name, cpf, email }: NewStudentProps) {
    try {
      await createStudent({
        variables: {
          name,
          cpf,
          email,
        },
      });
      toast({ type: 'success', message: `Aluno cadastrado(a) com sucesso!` });
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
        <title>Smasy - Cadastro de aluno</title>
      </Head>
      <div className={styles['new-student-container']}>
        <div className={styles['content']}>
          <section>
            <Image src={logoImg} alt="Descomplica - Smasy" />
            <h1>Cadastro de Aluno</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude a cadastrar novos
              alunos
            </p>
            <Link href="/alunos">
              <a className={styles['backLink']}>
                <FiArrowLeft size={16} color="#00e78e" />
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
              <Button type="submit">Cadastrar</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withApollo(NewStudent);
