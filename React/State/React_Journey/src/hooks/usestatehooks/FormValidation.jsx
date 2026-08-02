import React from "react";

const FormValidation = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = React.useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "") {
      alert("please enter name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("please enter valid email");
      return;
    }

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passRegex.test(formData.password)) {
      alert(
        "password must have atleast 1 number 1 upper and lowercase character and 1 special character and have 6 character",
      );
      return;
    }

    alert("Form Submitted Successfully");
    setData({ ...formData });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={formData.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <div>{data.name}</div>
      <div>{data.email}</div>
    </>
  );
};

export default FormValidation;
