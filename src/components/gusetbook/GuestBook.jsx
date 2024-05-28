import React, { useState } from "react";
import axios from "axios";

export default function GuestBook() {
  const [formData, setFormData] = useState({
    id: 6,
    userName: "",
    phoneNumber: "",
    roleId: 3,
    relationshipNumber: 1, //1신랑 2신부
    relationshipString: "",
    attend: 1, // 1참석 2불참 3미정
  });

  const handleSubmit = async () => {
    try {
      await axios.post("/api/user/signup", formData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === "number" ? parseInt(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="w-full h-[700px] p-4 box-border bg-white">
      <div className=" mt-8 text-heading2 text-theme1-black font-continuous flex items-center justify-center">
        GuestBook
      </div>
      <div className=" mt-4 text-theme1-black font-nanum text-center">
        신랑&신부에게 참석 의사 전달하기
      </div>

      <div className="flex justify-around w-[300px] my-[50px] mx-auto">
        <div className="text-theme1-black font-nanum text-center">
          <input
            id="sinlang"
            class="peer/sinlang"
            type="radio"
            name="relationshipNumber"
            defaultChecked
            value={1}
            onChange={handleChange}
          />
          <label for="sinlang" class="peer-checked/sinlang: ml-2">
            신랑측 손님
          </label>
        </div>
        <div className="text-theme1-black font-nanum text-center">
          <input
            id="sinbu"
            class="peer/sinbu"
            type="radio"
            name="relationshipNumber"
            value={2}
            onChange={handleChange}
          />
          <label for="sinbu" class="peer-checked/sinbu: ml-2">
            신부측 손님
          </label>
        </div>
      </div>
      <div>
        <form>
          <label className="block">
            <input
              type="text"
              placeholder="이름"
              name="userName"
              className="mt-1
              block
              w-full
              px-3 py-2
              bg-white
              border
              border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
             "
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="전화번호 (ex. 01012345678)"
              name="phoneNumber"
              className="mt-1
              block
              w-full
              px-3 py-2
              bg-white
              border
              border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
             "
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="신랑&신부와의 관계"
              name="relationshipString"
              className="mt-1
              block
              w-full
              px-3 py-2
              bg-white
              border
              border-slate-300
              rounded-md
              text-sm
              shadow-sm
              placeholder-slate-400
             "
              value={formData.relationshipString}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <div className="mt-12 flex flex-col w-3/4 text-theme1-black font-nanum">
        <div className="py-2">
          <input
            id="ans1"
            class="peer/ans1"
            type="radio"
            name="attend"
            defaultChecked
            value={1}
            onChange={handleChange}
          />
          <label for="ans1" class="peer-checked/ans1: ml-2">
            참석합니다.
          </label>
        </div>
        <div className="py-2">
          <input
            id="ans2"
            class="peer/ans2"
            type="radio"
            name="attend"
            value={2}
            onChange={handleChange}
          />
          <label for="ans2" class="peer-checked/ans2: ml-2">
            마음으로 함께하겠습니다.
          </label>
        </div>
        <div className="py-2">
          <input
            id="ans3"
            class="peer/ans3"
            type="radio"
            name="attend"
            value={3}
            onChange={handleChange}
          />
          <label for="ans3" class="peer-checked/ans3: ml-2">
            아직 정해지지 않았습니다.
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="mt-6 px-12 py-2 rounded-full bg-theme1-pink font-nanum text-white"
          onClick={handleSubmit}
        >
          제출
        </button>
      </div>
    </div>
  );
}
