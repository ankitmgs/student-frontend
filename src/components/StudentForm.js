import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const StudentForm = () => {
  const initialValues = {
    name: "",
    fatherName: "",
    studentClass: "",
    address: "",
    attendence: "",
  };

  const submitForm = (value) => {
    console.log(value);

    axios
      .post("http://localhost:5000/api/students", initialValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,
    onSubmit: submitForm,
  });
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Enter name"
          value={values.name}
          onChange={handleChange}
        />
        <div>
          <input
            id="fatherName"
            placeholder="Enter fatherName"
            value={values.fatherName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="studentClass"
            placeholder="Enter studentClass"
            value={values.studentClass}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            id="address"
            placeholder="Enter address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            id="attendence"
            value={values.attendence}
            onChange={handleChange}
          >
            <option value={"present"}>Present</option>
            <option value={"absent"}>Absent</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
