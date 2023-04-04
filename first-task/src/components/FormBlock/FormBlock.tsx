import React, { useState } from 'react';
import styles from './FormBlock.module.css';
import { DataCard, FormProps, SpeciesEnum, StateInput } from 'components/interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';

const defaultValues: StateInput = {
  name: '',
  surname: '',
  date: '',
  species: SpeciesEnum.oleg,
  file: '',
  approval: false,
};

export const FormBlock: React.FC<FormProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<StateInput>({
    defaultValues: {
      name: '',
      surname: '',
      date: '',
      species: SpeciesEnum.oleg,
      file: '',
      approval: false,
    },
  });
  const [img, setImg] = useState<null | string>(null);

  const onFormSubmit: SubmitHandler<StateInput> = (data) => {
    addCard(data.name, data.surname, data.date, data.species, data.file);
    resetForm();
  };

  const addCard = (name: string, surname: string, date: string, species: string, img: string) => {
    const card: DataCard = {
      name: name,
      surname: surname,
      date: date,
      species: species,
      img,
      approval: true,
    };

    props.updateData(props.cards.concat([card]));
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name as keyof StateInput;
    if (name === 'file' && e.target.files?.length) {
      setImg(URL.createObjectURL(e.target.files[0]));
    } else if (name === 'file' && e.target.files?.length === 0) {
      setImg(null);
    }
    if (errors[name]) {
      clearErrors(name);
    }
  }

  const submitButtonDisable = () => {
    if (
      errors.species ||
      errors.approval ||
      errors.date ||
      errors.file ||
      errors.name ||
      errors.surname
    ) {
      return true;
    } else {
      return false;
    }
  };

  function resetForm() {
    reset(defaultValues);
    setImg(null);
  }
  const name = register('name', {
    required: 'Required name',
    minLength: {
      value: 3,
      message: 'Min chars 3',
    },
  });
  const surname = register('surname', {
    required: 'Required surname',
    minLength: {
      value: 3,
      message: 'Min chars 3',
    },
  });
  const file = register('file', {
    validate: (data) => data.length > 0,
  });
  const date = register('date', {
    required: 'Required date',
    validate: (date) => {
      const dataValue = new Date(date);
      const currentDay = new Date();
      return dataValue <= currentDay;
    },
  });
  const species = register('species');
  const approval = register('approval', {
    validate: (data) => data,
  });

  return (
    <form action="" className={styles.form__block} onSubmit={handleSubmit(onFormSubmit)}>
      <Input label="Name" register={name} onChange={onChangeHandler} error={errors.name} />
      <Input label="Surname" register={surname} error={errors.surname} onChange={onChangeHandler} />
      <Input
        type="file"
        label="Your photo"
        image={img}
        register={file}
        error={errors.file}
        errorMessage="You should download avatar"
        onChange={onChangeHandler}
      />
      <Input
        type="date"
        label="Birth date"
        error={errors.date}
        errorMessage="Pick correct birth date"
        register={date}
        onChange={onChangeHandler}
      />
      <Select
        label="Choose your species"
        values={['Human', 'Alien', 'Elf', 'Animal', 'Oleg']}
        register={species}
        name="species"
      />
      <Checkbox
        label="Do you agree to hand over your data to darknet or fraudsters?"
        register={approval}
        error={errors.approval}
        errorMessage="you should agree"
      />
      <div className={styles.btn__block}>
        <Button type="submit" disable={submitButtonDisable()}>
          Submit data
        </Button>
        <Button type="reset" onClick={() => resetForm()}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FormBlock;
