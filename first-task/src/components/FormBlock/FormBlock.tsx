import React, { Component, createRef } from 'react';
import { DataCard, PropsInput, StateInput } from 'components/interfaces';

export class FormBlock extends Component<PropsInput, StateInput> {
  inputName: React.RefObject<HTMLInputElement>;
  inputSurname: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  inputFile: React.RefObject<HTMLInputElement>;
  checkboxApproval: React.RefObject<HTMLInputElement>;
  selectSpecies: React.RefObject<HTMLSelectElement>;

  constructor(props: PropsInput) {
    super(props);
    this.inputName = createRef();
    this.inputSurname = createRef();
    this.inputDate = createRef();
    this.inputFile = createRef();
    this.checkboxApproval = createRef();
    this.selectSpecies = createRef();

    this.state = {
      name: true,
      surname: true,
      date: true,
      file: true,
      species: true,
      approval: true,
      img: null,
    };
  }

  render() {
    return <form action=""></form>;
  }
}

export default FormBlock;
