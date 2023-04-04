import React, { useState } from 'react';
import styles from './FormBlock.module.css';
import { DataCard, SpeciesEnum, StateInput } from 'components/interfaces';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';

const defaultValues: StateInput = {
  name: '',
  surname: '',
  date: '',
  species: SpeciesEnum.oleg,
  file: '',
  approval: false,
};

export const FormBlock = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // getValues,
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
    // const newCard: DataCard = {
    //   name: data.name,
    //   surname: data.surname,
    //   date: data.date,
    //   species: data.species,
    //   img: img,
    //   approval: data.approval,
    // };
    resetForm();
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
  // const approval = register('approval', {
  //   validate: (data) => data,
  // });

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
