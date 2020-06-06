import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';

import PrimaryButton, { LinkButton } from '../../../components/Buttons';
import Input from '../../../components/Form/Input';
import Map from '../../../components/Form/Map';
import Avatar from '../../../components/Avatar';
import { InputContainer, FormContainer, ButtonContainer } from './styles';

export default function FormBase({
  onFormSubmit,
  loading,
  restaurante,
  buttonLabel,
}) {
  const formRef = useRef(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (restaurante) {
      setImage(restaurante.linkImagem);
      formRef.current.setData({
        ...restaurante,
        coords: JSON.stringify(restaurante.coords),
      });
    }
  }, [restaurante]);

  function handleChangeImage(ev) {
    const { value } = ev.target;
    setImage(value);
  }

  async function handleForm(data) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('Informe um nome para o restaurante.'),
        linkImagem: Yup.string().required('Informe um link da imagem.'),
        coords: Yup.object().shape({
          lat: Yup.number().required('Informe a latitude.'),
          lng: Yup.number().required('Informe a longitude.'),
        }),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      onFormSubmit(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleForm}>
      <FormContainer>
        <Avatar urlImage={image} />
        <InputContainer>
          <Input
            name="linkImagem"
            placeholder="Link da imagem"
            label="Imagem"
            onChange={handleChangeImage}
          />
          <Input
            name="nome"
            placeholder="Digite o nome do restaurante"
            label="Nome"
          />
        </InputContainer>
      </FormContainer>
      <Map name="coords" />
      <ButtonContainer>
        <PrimaryButton loading={loading} type="submit">
          {buttonLabel}
        </PrimaryButton>
        <LinkButton linkTo="/">Cancelar</LinkButton>
      </ButtonContainer>
    </Form>
  );
}

FormBase.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  restaurante: PropTypes.shape({
    linkImagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    coords: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }).isRequired,
  }),
  buttonLabel: PropTypes.string.isRequired,
};

FormBase.defaultProps = {
  loading: false,
  restaurante: null,
};
