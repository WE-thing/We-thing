import React, { useCallback, useEffect, useState } from "react";
import { postLogin } from "../lib/apis/user";
import { Form, Modal } from "react-bootstrap";

export default function useAuth() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, [window.localStorage.getItem("token")]);

  const login = useCallback(async (userName, phoneNumber) => {
    try {
      const res = await postLogin({ userName, phoneNumber });
      window.localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      return res.data;
    } catch (err) {
      alert(err.message);
      return;
    }
  }, []);

  const signup = useCallback((userName, phoneNumber) => {}, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login(e.target.userName.value, e.target.phoneNumber.value);
    handleClose();
  };

  const LoginModal = () => (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className=" font-nanum">이름(본명)</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="이름을 입력하세요"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>휴대번호</Form.Label>
            <Form.Control
              type="number"
              name="phoneNumber"
              placeholder="01012345678"
            />
          </Form.Group>
          <div className="w-full flex justify-around gap-4 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="w-full p-2 rounded-xl font-nanum bg-lightGray"
            >
              취소
            </button>
            <button
              type="submit"
              className="w-full p-2 rounded-xl font-nanum bg-theme1-pink"
            >
              로그인
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );

  return {
    token,
    login,
    signup,
    handleShow,
    handleClose,
    LoginModal,
    setToken,
  };
}
