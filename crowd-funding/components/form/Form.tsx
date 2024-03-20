"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: 0,
    image: "",
    category: "education",
  });
  const [image, setImage] = useState<File | null>(null);

  const imageHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setImage(fileList[0]);
    } else {
      setImage(null);
    }
  };
  const onFormChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      Form
      <div>
        <form>
          <div>
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={onFormChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={onFormChange}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={onFormChange}
            />
          </div>
          <div>
            <label>Category</label>
            <select
              id="category"
              name="category"
              onChange={onFormChange}
              value={formData.category}
            >
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="needs">Needs</option>
            </select>
          </div>
          <div>
            <label>Select Image</label>
          </div>
          <div>
            <div>Upload File to IPFS</div>
          </div>
          <div>
            <div>Start the Campaign</div>
          </div>
        </form>
      </div>
    </div>
  );
}
