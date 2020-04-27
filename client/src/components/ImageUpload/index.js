import React, { useState } from 'react';
import { Button, Modal, ModalBody, Form, FormGroup, Input, Label, Container } from 'reactstrap';

const ImageUpload = (props) => {
  const {
    className
  } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mx-auto px-auto mt-1">
      <Button className="border rounded shadow" color="transparent" onClick={toggle}>Change Avatar</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          {props.value.file && 
          <Container>
          <img className="imageuploadsizer mx-auto mt-2 mb-1" src={props.value.file} alt="Preview" />
          </Container>
          }
          <Form encType="multipart/form-data" action="../api/avatar" method="post">
            <FormGroup>
              <Label for="platform">Upload a new Avatar:</Label>
              <Input type="file" name="avatar" onChange={props.imageSelect} />
            </FormGroup>
            <Button color="transparent" className='my-2 mx-auto shadow border rounded'>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ImageUpload;