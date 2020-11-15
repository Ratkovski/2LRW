import React, {useRef, useCallback, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Bar, Pie } from 'react-chartjs-2';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '~/services/api';

import { Container, Content, Select } from './styles';

import Nav from '~/components/Nav';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Dashboard() {
  const formRef = useRef(null);
  const [labels, setLabels] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [profits, setProfits] = useState([]);
  const [onSelect, setOnSelect] = useState(false);
  const [categories, setCategories] = useState([]);
  const nav = useSelector(state => state.navDashboard.dashboard);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('/categories');

      console.log(response.data);
      setCategories({...categories,...response.data});
      console.log('testeeee '+ categories);
    }

    fetchCategories();
  },[])

  const handleSubmit = useCallback(async (data) => {
    // try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        initialDate: Yup.date()
          .required('Data inicial obrigatória'),
        finalDate: Yup.date().required('Data final obrigatória'),
      });


      const categoriesCheckbox = document.querySelectorAll("input[type='checkbox']");
      // let checkboxs = '';
      let checkboxs = [];
      for (let i = 0; i < categoriesCheckbox.length; i++) {
        if (categoriesCheckbox[i].checked) {
          // checkboxs += categoriesCheckbox[i].defaultValue + ',';
          checkboxs.push(categoriesCheckbox[i].defaultValue);
        }
      }

      if(checkboxs.length === 0) {
        alert('Selecione alguma categoria');
        return;
      }
      // checkboxs = checkboxs.substr(0,1);

      console.log(checkboxs)


      await schema.validate(data, {
        abortEarly: false,
      });

      const {initialDate, finalDate} = data;


      if(new Date(initialDate) > new Date(finalDate)) {
        alert('Data inicial não pode ser maior que data final');
        return;
      }

      const response = await api.post('/total_value_month', {
        id: 1,
        datein: initialDate,
        dateout: finalDate
      });

      // const values = [
      //     {
      //         value: 146375.13,
      //         date:'01-2020',
      //            category: 1,
      //         status: 1
      //     },
      //     {
      //         value: 202755.91999999998,
      //         date:'01-2020',
      //         status: 2
      //     },
      //     {
      //         value:94068.39,
      //         date: '02-2020',
      //         status: 1
      //     },
      //     {
      //         value:94068.39,
      //         date: '03-2020',
      //         status: 2
      //     },
      // ];

      const labels = [];
      const expense = [];
      const profit = [];

      // response.data.forEach(index => {
      //   const existDate = labels.find(element => element === index.date);

      //   if(!existDate) {
      //     labels.push(index.date);
      //   }

      //   const amountDate = response.data.filter(element => element.date === index.date);

      //   if(index.status === 1) {
      //     profit.push(index.value);
      //   } else if(index.status === 2) {
      //     expense.push(index.value);
      //   }

      //   if(amountDate.length === 1) {
      //     if(index.status === 1) {
      //       expense.push(0);
      //     } else if(index.status === 2) {
      //       profit.push(0);
      //     }
      //   }
      // });

      const values = [
        {
          "category": 1,
          "date": "01-2020",
          "status": 1,
          "value": 77362.71
        },
        {
          "category": 4,
          "date": "01-2020",
          "status": 1,
          "value": 69012.42
        },
        {
          "category": 2,
          "date": "01-2020",
          "status": 2,
          "value": 39081.14
        },
        {
          "category": 3,
          "date": "01-2020",
          "status": 2,
          "value": 85659.73
        },
      ];

      let labels2 = [];

      values.forEach(index => {
        const existDate = labels.find(element => element === index.date);

        console.log(categories);
        const findNameCategory = categories.find(element => element.id === index.category);

        console.log(findNameCategory + 'rer');
        const existCategory = labels2.find(element => element === findNameCategory.name);


        if(!existCategory) {

          labels2.push(findNameCategory);
          console.log(labels2);
        }

        if(!existDate) {
          labels.push(index.date);
        }

        const amountDate = values.filter(element => element.date === index.date);

        if(index.status === 1) {
          profit.push(index.value);
        }

        // if(amountDate.length === 1) {
        //   if(index.status === 1) {
        //     expense.push(0);
        //   } else if(index.status === 2) {
        //     profit.push(0);
        //   }
        // }
      });


      setLabels(labels);
      setExpenses(expense);
      setProfits(profit);
    // } catch (err) {
    //     formRef.current.setErrors(err);

    //     alert('Preencha todos os dados!');

    //     return;
    // }
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

  const options = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }


const data2 = {
labels: labels,
  datasets: [
        {
          label: 'Comida',
          backgroundColor: "#caf270",
          data: [12, 59, 5, 56, 58,12, 59, 87, 45],
          }, {
          label: 'Passagem',
          backgroundColor: "#45c490",
          data: [12, 59, 5, 56, 58,12, 59, 85, 23],
          }, {
          label: 'Medico',
          backgroundColor: "#008d93",
          data: [12, 59, 5, 56, 58,12, 59, 65, 51],
          }, {
          label: 'Outros',
          backgroundColor: "#2e5468",
          data: [12, 59, 5, 56, 58, 12, 59, 12, 74],
          }]
}

  return (
    <>
      <Nav/>
      <Container>
        <Content>
          {nav === 2 &&
            <>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Button type="submit">Buscar</Button>
                <Input type="date" name="finalDate" placeholder="Data final"/>
                <Input type="date" name="initialDate" placeholder="Data inicial"/>
              </Form>
              <Bar type={"bar"} data={data} options={title}/>
            </>
          }
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Button type="submit">Buscar</Button>
            <Select click={onSelect}>
              <div className="selectBox" onClick={() => setOnSelect(!onSelect)}>
                <select>
                    <option>Selecione as categorias</option>
                </select>
                <div id="checkBoxes">
                    <label>
                        <input type="checkbox" id="first" value="1"/>
                        Pao
                    </label>
                    <label>
                        <input type="checkbox" id="second" value="2"/>
                        Leite
                    </label>
                </div>
                <div className="overSelect"></div>
              </div>
              </Select>
            <Input type="date" name="finalDate" placeholder="Data final"/>
            <Input type="date" name="initialDate" placeholder="Data inicial"/>
          </Form>
          <Bar type={"Pie"}
               data={data2}
               options={options}
               />
            {/* <Bar type={"Pie"}
          data={data2}
          options={options}
          /> */}
        </Content>
      </Container>
    </>
  );
}
