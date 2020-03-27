import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.taget.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { newRepo } = this.state;

    const response = await api.get(`/repos/${newRepo}`)

  }

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
        Repositórios
      </h1>

        <Form onSubmit={() => { }}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton disabled>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton >
        </Form>
      </Container >
    );
  }
}
