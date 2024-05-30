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
          "/assets/images/weddingphoto1.jpeg",
          "/assets/images/weddingphoto2.jpeg",
          "/assets/images/weddingphoto3.jpeg",
          "/assets/images/weddingphoto4.jpeg",
          "/assets/images/weddingphoto5.jpeg",
          "/assets/images/weddingphoto6.jpeg",
          "/assets/images/weddingphoto7.jpeg",
          "/assets/images/weddingphoto8.jpeg",
          "/assets/images/weddingphoto1.jpeg",
        ]}
        start={1}
        end={9}
      />
    </div>
  );
}
