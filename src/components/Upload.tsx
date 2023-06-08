import React, { useState } from "react";
import axios from "axios";

const Upload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post("http://localhost:8080/upload", formData)
        .then((response) => {
          console.log(response.data.message);
          // Filuppladdningen var framgångsrik, gör något med responsen här
        })
        .catch((error) => {
          console.error("Fel vid filuppladdning:", error);
          // Hantera eventuella fel vid filuppladdning här
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload file</button>
    </div>
  );
};

export default Upload;
