import React from "react";
import formData from "@/data/CollectedFormData.json";

const FormDataPage = () => {
  return (
    <div className="flex flex-col items-stretch justify-center min-h-[75vh] bg-gray-100 text-gray-900 pt-32">
      <div className="max-w-6xl p-4 mx-auto">
        <h1 className="text-4xl">Form Data</h1>
        {formData &&
          formData.map((data, index) => {
            return (
              <div
                key={index}
                className="p-4 border-2 rounded-md my-4 hover:shadow-lg"
              >
                <p>Name: {data?.customerName}</p>
                <p>Email id: {data?.email_id}</p>
                <p>Message: {data?.message}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FormDataPage;
