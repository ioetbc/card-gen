import Image from "next/image";
import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

type FileDropzoneProps = {
  onFile: (file: File) => void;
  url: string | null;
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
    <div className="flex flex-col w-full">
      <div
        {...getRootProps()}
        className="bg-white border-r border-l border-t border-b rounded-b-md border-black p-4 text-center cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out flex justify-center items-center"
      >
        <input {...getInputProps()} />
        <div className="flex gap-4">
          <Image src="/upload.svg" width={20} height={20} alt="upload file" />
          <p className="text-sm">Upload file</p>
        </div>
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
