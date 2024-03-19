"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: 0,
    image: "",
  });
  type _event = {
    target: { name: string; value: string | number };
  };
  const onFormChange = (e: _event) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
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
            <label>Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={onFormChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
