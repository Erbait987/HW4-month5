import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    dispatch({ type: "UPDATE_USER_DATA", payload: formData });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
