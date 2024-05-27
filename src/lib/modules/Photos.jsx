import React from "react";
import PropTypes from "prop-types";

export default function Photos({ link, format, start, end }) {
  if (end - start + 1 > 30) {
    return <div>Error: Too many photos. The maximum is 30.</div>;
  }

  const srcArray = [];
  for (let i = start; i <= end; i++) {
    srcArray.push(`${link}${i}.${format}`);
  }

  const rows = [];
  for (let i = 0; i < srcArray.length; i += 3) {
    rows.push(srcArray.slice(i, i + 3));
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

Photos.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
