import { Modal, ModalDialog, Form, Button } from "react-bootstrap";
import style from "../modules/Login.module.css"

function Login(props) {
  

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={style.customDialogStyle}
      contentClassName={style.customContentStyle}
      centered>
        <Modal.Body className={style.modalBody}>
        <Form className={style.form}>
          <h2 className={style.formTitle}>Login</h2>
          <Form.Group className="mb-3" controlId="email" className={style.inputGroup}>
            <Form.Control type="email" placeholder="Email" className={style.formInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password" className={style.inputGroup}>
            <Form.Control type="email" placeholder="Password" className={style.formInput}/>
          </Form.Group>
          <Form.Group className={style.btnGroup}>
            <Button className={style.btnLogin}>Login</Button>
          </Form.Group>
        </Form>
        <p className={style.loginDesc}>Don't have an account ? Klik <a href="#">Here</a></p>
        </Modal.Body>
    </Modal>
  );
}

export default Login