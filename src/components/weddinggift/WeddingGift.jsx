import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function WeddingGift() {
  const [modalShow, setModalShow] = useState(false);
  const [modalBody, setModalBody] = useState({
    name: "",
    account: "",
  });

  const [couple, setCouple] = useState({
    sinlangAccount: "",
    sinbuAccount: "",
  });

  useEffect(() => {
    const fetchCoupleList = async () => {
      try {
        const id = "66558c44a89a71989539139e";
        const coupleResponse = await axios.get(`/api/couple/${id}`);
        const coupleData = coupleResponse.data;

        setCouple({
          sinlangAccount: coupleData.account.sinlangAccount,
          sinbuAccount: coupleData.account.sinbuAccount,
        });
      } catch (error) {
        console.error("Error fetching couple data:", error);
      }
    };
    fetchCoupleList();
  }, []);

  const handleClose = (e) => {
    setModalBody({
      name: "",
      account: "",
    });
    setModalShow(false);
  };

  const handleOpen = (name, account) => {
    setModalBody({
      name,
      account,
    });
    setModalShow(true);
  };
  return (
    <>
      <div className="w-full h-[300px] p-4 box-border bg-lightGray">
        <div className="mt-6 text-heading3 text-theme1-black font-nanum font-bold flex items-center justify-center">
          신랑&신부에게 마음전하기
        </div>
        <div className=" mt-4 text-theme1-black font-nanum flex items-center justify-center">
          축복의 의미로 축의금을 전달해보세요.
        </div>
        <div className="flex justify-around w-[300px] my-[50px] mx-auto">
          <div>
            <div className="text-theme1-black font-nanum text-center">신랑</div>
            <button
              className="mt-6 px-8 py-2 rounded-full bg-darkGray text-white font-nanum "
              onClick={() => {
                handleOpen("신랑", couple.sinlangAccount);
              }}
            >
              계좌번호
            </button>
          </div>
          <div>
            <div className="text-theme1-black font-nanum text-center">신부</div>
            <button
              className="mt-6 px-8 py-2 rounded-full bg-white text-theme1-black font-nanum"
              onClick={() => {
                handleOpen("신부", couple.sinbuAccount);
              }}
            >
              계좌번호
            </button>
          </div>
        </div>
      </div>
      <Modal
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        show={modalShow}
        onHide={handleClose}
        centered
      >
        <Modal.Body>
          <div className="text-theme1-black font-nanum text-center">
            <div>{modalBody.name}</div>
            <div>{modalBody.account}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
