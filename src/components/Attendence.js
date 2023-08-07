import axios from "axios";
import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";

const Attendence = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    // Fetch all students initially
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFilterStudents = async (values) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/students/${values.attendanceStatus}`
      );
      setFilteredStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h2>Add Student</h2>
        <Formik
          initialValues={{ attendanceStatus: "present" }}
          onSubmit={handleFilterStudents}
        >
          <Form>
            <div>
              <label>
                Attendance Status:
                <Field name="attendanceStatus" as="select">
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                </Field>
              </label>
              <button type="submit">Filter Students</button>
            </div>
          </Form>
        </Formik>

        <h2>Filtered Students</h2>
        <ul>
          {filteredStudents.map((student) => (
            <li key={student._id}>
              <strong>Name:</strong> {student.name}, <strong>Class:</strong>{" "}
              {student.studentClass}, <strong>Attendance Status:</strong>{" "}
              {student.attendanceStatus}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Attendence;
