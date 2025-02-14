// on track

import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import axiosInstance from "../../../../utils/user/axiosInstance";
import attachment from '../../../../assets/userImages/aiAttachment.png'
import config from "../../../../config/config";

// const urlEndpoint = process.env.VITE_IMAGE_KIT_ENDPOINT;
const urlEndpoint = config.imageKitEndpoint;
// const publicKey = process.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const publicKey = config.imageKitPublicKey ;

console.log("urlEndpoint in uploadssssssssssssss", publicKey);
console.log("publickey in uploadssssssssssssss", publicKey);




const authenticator = async () => {
  try {
    const response = await axiosInstance.get("/ai/upload");
    console.log("response in uploadssss", response);

    // Check for successful status code
    if (response.status !== 200) {
      throw new Error(
        `Request failed with status ${response.status}: ${response.statusText}`
      );
    }

    const { signature, expire, token } = response.data;
    console.log("signature:-", signature);
    console.log("expire:-", expire);
    console.log("token:-", token);

    return { signature, expire, token };

  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ setImg }) => {
  const ikUploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error in upload:- ", err);
  };

  const onSuccess = (res) => {
    console.log("Success in upload:-", res);
    setImg((prev) => ({ ...prev, isLoading: false, dbData: res }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress in upload:-", progress);
  };

  const onUploadStart = (evt) => {
    console.log("start in upload:-", evt);
    // ***************** for testing purp *****************
    // setImg((prev) => ({ ...prev, isLoading: true }));  //for testing
    // ***************** for testing purp *****************

    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg((prev) => ({ ...prev, isLoading: true,aiData: {  //aiData comes or initialized in NewPrompt
          inlineData: {
            data: reader.result.split(",")[1],
            mimeType: file.type,
          },
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        style={{ display: "none" }}
        ref={ikUploadRef}
      />
      {
        <label onClick={() => ikUploadRef.current.click()}>
          <img src={attachment} alt="" />
        </label>
      }
    </IKContext>
  );
};

export default Upload;
