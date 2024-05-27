import React, { useState } from "react";
import axios from "axios";

export default function GuestBook() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    relationshipNumber: 1, //1신랑 2신부
    relationshipString: "",
    attend: 1, // 1참석 2불참 3미정
  });

  const handleSubmit = async () => {
    try {
      await axios.post("/api/guestbook", formData);
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
    <div className="flex flex-col items-center w-full">
      <div className=" text-heading2 text-theme1-black font-continuous">
        GuestBook
      </div>
      <div className=" mt-4">신랑&신부에게 참석 의사 전달하기</div>

      <div className="mt-12 flex flex-row justify-between w-3/4">
        <div>
          <input
            id="sinlang"
            class="peer/sinlang"
            type="radio"
            name="relationshipNumber"
            defaultChecked
            value={1}
            onChange={handleChange}
          />
          <label for="sinlang" class="peer-checked/sinlang:">
            신랑측 손님
          </label>
        </div>
        <div>
          <input
            id="sinbu"
            class="peer/sinbu"
            type="radio"
            name="relationshipNumber"
            value={2}
            onChange={handleChange}
          />
          <label for="sinbu" class="peer-checked/sinbu:">
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
              name="name"
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
              value={formData.name}
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
      <div className="mt-12 flex flex-col w-3/4 ">
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
          <label for="ans1" class="peer-checked/ans1:">
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
          <label for="ans2" class="peer-checked/ans2:">
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
          <label for="ans3" class="peer-checked/ans3:">
            아직 정해지지 않았습니다.
          </label>
        </div>
      </div>
      <div>
        <button
          className="mt-12 px-12 py-3 rounded-full bg-rose-200"
          onClick={handleSubmit}
        >
          제출
        </button>
      </div>
    </div>
  );
}
