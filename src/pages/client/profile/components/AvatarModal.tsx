import Button from "@/app/components/button/Button";
import { TFile } from "@/app/components/upload/FileUploader";
import { useRedux } from "@/app/hooks";
import { updateImage } from "@/app/redux/profile/profile.slice";
import React, { useCallback, useState } from "react";
import Dropzone from "react-dropzone";

interface AvatarModalProps {
  onClick: () => void;
}
function AvatarModal({ onClick }: AvatarModalProps) {
  const [avatar, setAvatar] = useState<TFile>();
  const { dispatch } = useRedux();
  const renderAvatar = useCallback(() => {
    return (
      <div className="h-full w-full">
        <img
          src={avatar?.preview}
          alt={avatar?.name}
          className="h-full w-full"
        />
      </div>
    );
  }, [avatar]);

  const handleUpload = () => {
    if (!avatar) return;
    dispatch(updateImage({ avatar }));
  };

  console.log(avatar?.size);

  return (
    <div className="top-0 left-0 w-screen h-full fixed z-30">
      <div className="h-full w-full flex relative">
        <div
          className="bg-bgPrimaryLayer absolute w-full h-full"
          onClick={onClick}
        />
        <div className="max-w-lg w-full p-10 bg-bgPrimaryBar rounded-xl z-10 m-auto">
          <div className="text-center">
            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Tải ảnh lên
            </h2>
          </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
              <div className="flex items-center justify-center w-full">
                <Dropzone
                  maxFiles={1}
                  accept={{
                    "image/jpeg": [],
                    "image/png": [],
                  }}
                  onDrop={(acceptedFiles) => {
                    const file = acceptedFiles[0];
                    Object.assign(file, {
                      preview: URL.createObjectURL(file),
                    });
                    setAvatar(file);
                  }}
                >
                  {({ getInputProps, getRootProps }) => (
                    <div
                      className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 group text-center"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />

                      {!avatar?.preview ? (
                        <div className="h-full w-full text-center flex flex-col items-center justify-center   ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                            <img
                              className="has-mask h-36 object-center"
                              src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                              alt="freepik"
                            />
                          </div>
                          <p className="pointer-none text-gray-500 ">
                            <span className="text-sm">Drag and drop</span> files
                            here <br /> or
                            <span className="text-blue-600 hover:underline">
                              select a file
                            </span>
                            from your computer
                          </p>
                        </div>
                      ) : (
                        renderAvatar()
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>File type: doc,pdf,types of images</span>
            </p>
            <div>
              <Button
                type="button"
                onClick={handleUpload}
                large
                highlight
                disabled={!avatar}
              >
                Upload
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AvatarModal;
