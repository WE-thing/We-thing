import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GuestBookBefore({
  onFormSubmit,
  formData,
  onEdit,
  isSubmitted,
}) {
  const [localFormData, setLocalFormData] = useState({
    id: formData.id,
    userName: formData.userName,
    phoneNumber: formData.phoneNumber,
    roleId: 3,
    relationshipNumber: formData.relationshipNumber, //1신랑 2신부
    relationshipString: formData.relationshipString,
    attend: formData.attend, // 1참석 2불참 3미정
  });

  useEffect(() => {
    // formData가 변경될 때마다 localFormData 업데이트
    setLocalFormData({
      id: formData.id,
      userName: formData.userName,
      phoneNumber: formData.phoneNumber,
      roleId: 3,
      relationshipNumber: formData.relationshipNumber,
      relationshipString: formData.relationshipString,
      attend: formData.attend,
    });
  }, [formData]);

  const handleSubmit = async () => {
    if (
      !localFormData.userName ||
      !localFormData.phoneNumber ||
      !localFormData.relationshipString ||
      !localFormData.relationshipNumber ||
      !localFormData.attend
    ) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    try {
      await axios.post("/api/user/signup", localFormData);
      onFormSubmit(localFormData);
    } catch (error) {
      console.log("Error: ", error.response.data);
      alert(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = e.target.type === "number" ? parseInt(value) : value;
    setLocalFormData({ ...localFormData, [name]: newValue });
  };

  const handleUpdate = async () => {
    if (
      !localFormData.userName ||
      !localFormData.phoneNumber ||
      !localFormData.relationshipString ||
      !localFormData.relationshipNumber ||
      !localFormData.attend
    ) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    try {
      await axios.put(
        `/api/user/${localFormData.name}/${localFormData.phoneNumber}`,
        localFormData
      );

      onEdit(localFormData);
      onFormSubmit(localFormData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div>
      <div className="flex justify-around w-[300px] my-[50px] mx-auto">
        <div className="text-theme1-black font-nanum text-center">
          <input
            id="sinlang"
            class="peer/sinlang"
            type="radio"
            name="relationshipNumber"
            value={1}
            onChange={handleChange}
            checked={localFormData.relationshipNumber == 1 ? true : false}
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
            checked={localFormData.relationshipNumber == 2 ? true : false}
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
              mb-2
             "
              value={localFormData.userName}
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
              value={localFormData.phoneNumber}
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
              value={localFormData.relationshipString}
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
            value={1}
            onChange={handleChange}
            checked={localFormData.attend == 1 ? true : false}
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
            checked={localFormData.attend == 2 ? true : false}
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
            checked={localFormData.attend == 3 ? true : false}
          />
          <label for="ans3" class="peer-checked/ans3: ml-2">
            아직 정해지지 않았습니다.
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {!isSubmitted ? (
          <button
            className="mt-6 px-12 py-2 rounded-full bg-theme1-pink font-nanum text-white"
            onClick={handleSubmit}
          >
            제출
          </button>
        ) : (
          <button
            className="mt-6 px-12 py-2 rounded-full bg-theme1-pink font-nanum text-white"
            onClick={handleUpdate}
          >
            완료
          </button>
        )}
      </div>
    </div>
  );
}
