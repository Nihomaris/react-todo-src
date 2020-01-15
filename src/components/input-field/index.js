import React, {useState, useRef} from 'react';

import Add from '@material-ui/icons/Add'
import { Form, Popover, OverlayTrigger } from 'react-bootstrap';

import './style.scss'

function InputField({ createTodo }) {
  const [text, setText] = useState('')
  const refAlert = useRef(null);

  const validateText = text => {
    if(text === '') return false;
    if(text.trim() === '') return false;
    if(text.replace(/\s+/g,'').length < 3) return false;

    return true;
  }

  const createNewToDo = () => {
    refAlert.current.hide();

    if(validateText(text)) {
      createTodo(text);
      setText('')
    } else {
      refAlert.current.show();
    }
  }

  const keyPressed = (event) => {
    refAlert.current.hide();
    if (event.key === "Enter") {
      event.preventDefault();
      createNewToDo()
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Ошибка в названии задачи</Popover.Title>
      <Popover.Content>
          Поле не должно быть пустое, содержать только пробелы и количество символов без учета пробелов не должно быть меньше 3х
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="input-field">
      <div className="input-field__indicator" onClick={e => createNewToDo()}>
        <Add />
      </div>
      <Form className="input-field__form">
        <Form.Group controlId="formBasicEmail" className="input-field__form-group">
          <OverlayTrigger ref={refAlert} trigger="manual" placement="top" overlay={popover}>
            <Form.Control type="text" onKeyPress={keyPressed} onChange={e => setText(e.target.value)} value={text} />
          </OverlayTrigger>
        </Form.Group>

      </Form>
    </div>
  );
}

export default InputField;
