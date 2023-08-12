import Image from "next/image";
import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

type FileDropzoneProps = {
  onFile: (file: File) => void;
  url: string;
};

export const DragDrop: React.FC<FileDropzoneProps> = ({onFile, url}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFile(acceptedFiles[0]);
      }
    },
    [onFile]
  );

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div className="flex flex-col gap-2">
      <div
        {...getRootProps()}
        className="bg-white border-2 border-gray-200 border-dashed rounded-sm p-5 text-center cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out min-h-[150px] flex justify-center items-center"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Upload file</p>
        ) : (
          <p>Drag n drop an image or click to select</p>
        )}
      </div>
      <div>
        {url && (
          <Image
            src={url}
            alt="Uploaded image"
            width={60}
            height={80}
            className="rounded-sm"
          />
        )}
      </div>
    </div>
  );
};
