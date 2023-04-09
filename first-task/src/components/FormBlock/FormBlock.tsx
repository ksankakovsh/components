import styles from './FormBlock.module.css';
import { DataCard, FormData } from 'utils/interfaces';
import { useForm } from 'react-hook-form';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import Checkbox from 'components/Checkbox/Checkbox';

export const FormBlock = ({ addCard }: { addCard: (card: DataCard) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onFormSubmit = (data: FormData) => {
    addCard({
      name: data.name,
      surname: data.surname,
      date: data.date,
      species: data.species,
      img: URL.createObjectURL(data.img[0]),
      approval: true,
    });
    reset();
  };

  const name = register('name', {
    required: 'Required name',
    minLength: {
      value: 3,
      message: 'Min chars 3',
    },
  });
  const file = register('img', {
    validate: (data) => data.length > 0,
    required: {
      value: true,
      message: 'Choose avatar',
    },
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
      <Input label="Name" register={name} type={'text'} name="" image={null} />
      {errors.name && (
        <p className="form-error" role="alert">
          The name must be at least 3 characters long and start with an uppercased letter
        </p>
      )}
      <Input type="file" label="Your photo" register={file} name="image" image={null} />
      {errors.img && (
        <p className="form-error" role="alert">
          You must select a photo
        </p>
      )}
      <Input type="date" label="Birth date" register={date} name="date" image={null} />
      <Select
        label="Choose your species"
        values={['Human', 'Alien', 'Elf', 'Animal', 'Oleg']}
        register={species}
        name="species"
      />
      <Checkbox
        label="Do you agree to hand over your data to darknet or fraudsters?"
        register={approval}
      />
      <div className={styles.btn__block}>
        <Button type="submit">Submit data</Button>
      </div>
    </form>
  );
};
export default FormBlock;
