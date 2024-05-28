import React, { useState, useEffect } from "react";
import AlbumPhotos from "../../lib/modules/AlbumPhotos";
// api 요청은 "../../lib/apis"에서 불러올 거에요 !
import { getAlbumList, postAlbum } from "../../lib/apis/album";

export default function SharedAlbum() {
  const [photoList, setPhotoList] = useState([]);
  const [userId, setUserId] = useState(2);

  // 사진들을 불러와서 배열에 띄울 거에요 -> 띄울 때는 AlbumPhotos를 사용할거에요
  // GET /album/:id 뭐 이런거 하겠죠?
  // 불러온 사진 목록을 state에 넣으면 될 것 같아요
  useEffect(() => {
    getAlbumList({ userId: userId }).then((data) => {
      console.log(data);
      setPhotoList(JSON.parse(data.imageUrl));
    });
  }, []);

  // 각 사진을 누르면 onClick으로 크게 모달에 띄울거에요

  // '+' 버튼이 있어요 -> 사진을 업로드 할거에요
  // 기기의 앨범을 띄워서 사진을 고르게 할거에요
  // 고른 사진도 state에 저장하면 되겠네요
  // POST /album/:userId 하면 되겠죠?

  // 다운로드 버튼이 있어요 -> 사진을 다운로드 할 거에요 우와
  // 어떻게 하는지는 아직은 모르겠어요 앞으로 배워갑시다

  return (
    <div>
      <AlbumPhotos picUrls={photoList} start={1} end={photoList.length} />
    </div>
  );
}
