import React from "react";

const FilePicker = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="form-control w-full max-w-xs">
        <input
          type="file"
          className="file-input file-input-bordered rounded-xl w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
