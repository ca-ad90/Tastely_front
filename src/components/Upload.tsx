import React, { useState } from "react";
import axios from "axios";

const Upload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(null);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const fileUploadHandler = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const res = await axios.post("http://localhost:8080/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
      } catch (err) {
        if (err.response && err.response.status === 500) {
          console.log("There was a problem with the server");
        } else {
          console.log(err.response && err.response.data.msg);
        }
      }
    }
  };

  return (
    <div className="App">
      <h1 className="header">Upload file</h1>
      <input type="file" onChange={(e) => onImageChange(e)} />
      <button onClick={fileUploadHandler}>Upload</button>
      {selectedFile && <img src={URL.createObjectURL(selectedFile)} style={{ width: 350, height: 350 }} />}
      {uploadedFile && (
        <div className="upload">
          <h3 className="upload_header">{uploadedFile.fileName}</h3>
          <img className="upload_image" src={uploadedFile.filePath} alt={uploadedFile.fileName} />
        </div>
      )}
    </div>
  );
};

export default Upload;
