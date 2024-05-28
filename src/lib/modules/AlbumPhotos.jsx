import React from "react";
import PropTypes from "prop-types";

export default function AlbumPhotos({ picUrls, start, end }) {

  const rows = [];
  for (let i = 0; i < end; i += 3) {
    rows.push(picUrls.slice(i, i + 3));
  }

  return (
    <div className="photos-container">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="photo-row flex justify-center mb-3 gap-3"
        >
          {row.map((src, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${src})` }}
              className="bg-cover bg-center w-1/3 aspect-square"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

AlbumPhotos.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
