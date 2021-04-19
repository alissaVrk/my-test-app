import './App.css';
import React, { useState } from 'react'
import {Form, Input, Button} from 'antd'

function App() {
  const [form, setForm] = useState({test: null})
  const [date, setDate] = useState("")
  const [dateReact, setDateReact] = useState("")
  return (
    <div className="App">
      <Form name="form" onFinish={(values) => setForm(values)}>
        <Form.Item name="test" label="test date">
          <Input type="date"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" id="submit">Submit</Button>
        </Form.Item>
      </Form>
      <p id="result">{`date is ${form.test}`}</p>


      <Input type="date" id="justDate" onChange={(event) => setDate(event.currentTarget.value)}></Input>

      <p id="resultDate">{`date is ${date}`}</p>

      <input type="date" id="dateReact" onChange={(event) => setDateReact(event.currentTarget.value)}/>

      <p id="resultDateReact">{`date is ${dateReact}`}</p>
    </div>
  );
}

export default App;
