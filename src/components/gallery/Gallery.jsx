import React from "react";
import Photos from "../../lib/modules/Photos";

export default function Gallery({invitation}) {
  return (
    <div className="text-center bg-theme1-primary w-full p-5 pb-12">
      <p className="font-continuous text-heading2 text-darkGray my-10">
        Gallery
      </p>
      <Photos
        link={"/src/assets/images/weddingphoto"}
        format={"jpeg"}
        start={1}
        end={9}
      />
    </div>
  );
}
