import React, {useRef, useCallback, useState} from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import history from '~/services/history';

import { Container, Content } from './styles';

import Nav from '~/components/Nav';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Dashboard() {
  const formRef = useRef(null);
  const [labels, setLabels] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [profits, setProfits] = useState([]);
  const nav = useSelector(state => state.navDashboard.dashboard);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        initialDate: Yup.date()
          .required('Data inicial obrigatória'),
        finalDate: Yup.date().required('Data final obrigatória'),
      });

      // await schema.validate(data, {
      //   abortEarly: false,
      // });

      // history.push('/dashboard');

      const values = [
          {
              value: 146375.13,
              date:'01-2020',
              status: 1
          },
          {
              value: 202755.91999999998,
              date:'01-2020',
              status: 2
          },
          {
              value:94068.39,
              date: '02-2020',
              status: 1
          },
          {
              value:94068.39,
              date: '03-2020',
              status: 2
          },
      ];

      const labels = [];
      const expense = [];
      const profit = [];

      values.forEach(index => {
        const existDate = labels.find(element => element == index.date);

        if(!existDate) {
          labels.push(index.date);
        }

        const amountDate = values.filter(element => element.date == index.date);

        if(index.status == 1) {
          profit.push(index.value);
        } else if(index.status == 2) {
          expense.push(index.value);
        }

        if(amountDate.length == 1) {
          if(index.status == 1) {
            expense.push(0);
          } else if(index.status == 2) {
            profit.push(0);
          }
        }
      });

      setLabels(labels);
      setExpenses(expense);
      setProfits(profit);
    } catch (err) {
        formRef.current.setErrors(err);

        alert('Preencha todos os dados!');

        return;
    }
  },[]);


  const data = {
    labels: labels,
    datasets: [
      {
        label: "Lucros",
        backgroundColor: "#314295",
        data: profits
      },
      {
        label: "Despesas",
        backgroundColor: "#FF526B",
        data: expenses
      }
    ]
  };

  const title = {
    title: {
        display: true,
        text: 'Lucros e despesas mensais',
        fontSize: 25
    }
  }

  return (
    <>
      <Nav/>
      <Container>
        <Content>
          {nav === 1 &&
            <>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Button type="submit">Buscar</Button>
                <Input type="date" name="finalDate" placeholder="Data final"/>
                <Input type="date" name="initialDate" placeholder="Data inicial"/>
              </Form>
              <Bar type={"bar"} data={data} options={title}/>
            </>
          }
        </Content>
      </Container>
    </>
  );
}
