import React from "react";
import AlbumPhotos from "../../lib/modules/AlbumPhotos";

export default function Gallery({ invitation }) {
  return (
    <div className="text-center bg-theme1-primary w-full p-[20px] pb-12">
      <p className="font-continuous text-heading2 text-darkGray my-10">
        Gallery
      </p>
      <AlbumPhotos
        picUrls={[
          "/src/assets/images/weddingphoto1.jpeg",
          "/src/assets/images/weddingphoto2.jpeg",
          "/src/assets/images/weddingphoto3.jpeg",
          "/src/assets/images/weddingphoto4.jpeg",
          "/src/assets/images/weddingphoto5.jpeg",
          "/src/assets/images/weddingphoto6.jpeg",
          "/src/assets/images/weddingphoto7.jpeg",
          "/src/assets/images/weddingphoto8.jpeg",
          "/src/assets/images/weddingphoto1.jpeg",
        ]}
        start={1}
        end={9}
      />
    </div>
  );
}
