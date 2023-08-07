import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

type FileDropzoneProps = {
  onFile: (file: File) => void;
};

export const DragDrop: React.FC<FileDropzoneProps> = ({onFile}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      if (acceptedFiles.length > 0) {
        onFile(acceptedFiles[0]);
      }
    },
    [onFile]
  );

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div
      {...getRootProps()}
      className="bg-gray-100 border-2 border-gray-200 rounded-md p-5 text-center cursor-pointer hover:bg-gray-200"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag drop some file here, or click to select a file</p>
      )}
    </div>
  );
};
