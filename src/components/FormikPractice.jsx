import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const FormikPractice = () => {
  const handleNegativeValue = (event) => {
    const {
      key,
      target: { value, selectionStart },
    } = event;
    const newValue =
      value.slice(0, selectionStart) + value.slice(selectionStart + 1);
    const parsedValue = parseFloat(newValue);
    if (
      ["ArrowUp", "ArrowDown", "-", "+", "e", "E"].includes(key) &&
      (isNaN(parsedValue) || parsedValue < 0)
    ) {
      event.preventDefault();
    }
  };

  const formik = useFormik({
    initialValues: {
      phonenumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      termandCondition: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invail email address")
        .required("Email is required"),
      phonenumber: Yup.string()
        .required("Phone number is required")
        .phone("IN", true, "Please enter a valid Indian phone number"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password at list 6 character is long"),
      confirmPassword: Yup.string()
        .required("Confirms password is required")
        .min(6, "Confirm password at list 6 character is long")
        .oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password is not match"
        ),
      termandCondition: Yup.boolean().oneOf(
        [true],
        "Please accept term and condition"
      ),
    }),
    onSubmit: (values) => {
      console.log(values, "values>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    },
  });

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-10 space-y-4">
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Enter the phone number"
            className="border rounded-sm w-60 px-2 py-1"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onKeyDown={handleNegativeValue}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.phonenumber}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter the name"
            className="border rounded-sm w-60 px-2 py-1"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="Enter the password"
            className="border rounded-sm w-60 px-2 py-1"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Enter the Confirm password"
            className="border rounded-sm w-60 px-2 py-1"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <input
            type="checkbox"
            name="termandCondition"
            className="cursor-pointer w-4 h-4"
            checked={formik.values.termandCondition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.termandCondition &&
            formik.errors.termandCondition && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.termandCondition}
              </p>
            )}
        </div>

        <div>
          <input
            type="checkbox"
            name="termandCondition"
            className="cursor-pointer w-4 h-4"
            checked={formik.values.termandCondition}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.termandCondition &&
            formik.errors.termandCondition && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.termandCondition}
              </p>
            )}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          className="border px-10 py-2 text-center rounded-sm cursor-pointer"
          onClick={formik.handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default FormikPractice;
