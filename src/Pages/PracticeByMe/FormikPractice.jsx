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
      AdditionalInfoFlag: false,
      AdditionalInfo: "",
      country: "",
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
      AdditionalInfoFlag: Yup.boolean(),
      AdditionalInfo: Yup.string().when("AdditionalInfoFlag", {
        is: true,
        then: Yup.string().required("This field is reqiured"),
      }),
      country: Yup.string().required("Country name is requried"),
    }),
    onSubmit: (values) => {
      console.log(values, "values>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    },
  });
  const countryOptions = [
    { label: "India", value: "India" },
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
    { label: "Australia", value: "Australia" },
    { label: "Germany", value: "Germany" },
    { label: "France", value: "France" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "Brazil", value: "Brazil" },
    { label: "Japan", value: "Japan" },
    { label: "South Africa", value: "South Africa" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-1/6 lg:w-1/7 xl:w-1/8 flex flex-col justify-center items-start mt-10 space-y-4">
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
              placeholder="Enter the email"
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
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <div>
            <div className="flex justify-center items-center space-x-2">
              <input
                type="checkbox"
                name="termandCondition"
                className="cursor-pointer w-4 h-4"
                checked={formik.values.termandCondition}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>Term and Conditions</span>
            </div>
            {formik.touched.termandCondition &&
              formik.errors.termandCondition && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.termandCondition}
                </p>
              )}
          </div>

          <div>
            <div className="flex justify-center items-center space-x-2">
              <input
                type="checkbox"
                name="AdditionalInfoFlag"
                className="cursor-pointer w-4 h-4"
                checked={formik.values.AdditionalInfoFlag}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>Additional Information</span>
            </div>
            {formik.touched.AdditionalInfoFlag &&
              formik.errors.AdditionalInfoFlag && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.AdditionalInfoFlag}
                </p>
              )}
          </div>

          <div className="w-full">
            <div className="flex flex-col justify-center items-start space-x-2">
              <span>Enter Additional Information</span>
              <textarea
                type="text"
                className="border w-full"
                name="AdditionalInfo"
                checked={formik.values.AdditionalInfo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.AdditionalInfo && formik.errors.AdditionalInfo && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.AdditionalInfo}
              </p>
            )}
          </div>

          <div className="w-full">
            <select
              name="country"
              id="country"
              className="w-full border border-gray-400 rounded-sm py-1"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              <option value="">Select the country</option>
              {countryOptions?.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
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

/*************************************************** Formik with array ******************************************************/

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "yup-phone";

// const FormikPractice = () => {
//   const formik = useFormik({
//     initialValues: {
//       employees: [{ firstName: "", lastName: "", email: "" }],
//     },
//     validationSchema: Yup.object().shape({
//       employees: Yup.array().of(
//         Yup.object().shape({
//           firstName: Yup.string().required("First name is required"),
//           lastName: Yup.string().required("Last name is required"),
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("Email is required"),
//         })
//       ),
//     }),
//     onSubmit: (values) => {
//       alert("Form is submitted");
//       console.log(values, ">>>>>>>>>>>>>>>>>");
//       formik.resetForm();
//     },
//   });

//   const handleAddField = () => {
//     const updatedEmployees = [...formik.values.employees];
//     updatedEmployees.push({ firstName: "", lastName: "", email: "" });
//     formik.setFieldValue("employees", updatedEmployees);
//   };

//   const handleRemoveField = (index) => {
//     const updatedEmployees = formik.values.employees?.filter(
//       (_, idx) => idx !== index
//     );
//     formik.setFieldValue("employees", updatedEmployees);
//   };

//   return (
//     <>
//       <div className="w-full flex flex-col justify-center items-center">
//         {formik?.values?.employees?.map((_, index) => {
//           return (
//             <React.Fragment key={index}>
//               <div className="w-1/5 flex flex-col justify-center items-center mt-10 space-y-4 p-3 border rounded-lg border-gray-400">
//                 <h2 className="text-start w-60 font-medium">{`E-${
//                   index + 1
//                 }`}</h2>
//                 <div>
//                   <input
//                     type="text"
//                     name={`employees[${index}].firstName`}
//                     placeholder="Enter the firstName"
//                     className="border rounded-sm w-60 px-2 py-1 border-gray-400"
//                     value={formik?.values?.employees[index]?.firstName}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik.touched.employees?.[index]?.firstName &&
//                     formik.errors.employees?.[index]?.firstName && (
//                       <p className="text-red-500 text-xs mt-1">
//                         {formik.errors.employees?.[index]?.firstName}
//                       </p>
//                     )}
//                 </div>

//                 <div>
//                   <input
//                     type="text"
//                     name={`employees[${index}].lastName`}
//                     placeholder="Enter the lastName"
//                     className="border rounded-sm w-60 px-2 py-1 border-gray-400"
//                     value={formik?.values?.employees?.[index]?.lastName}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik?.touched?.employees?.[index]?.lastName &&
//                     formik?.errors?.employees?.[index]?.lastName && (
//                       <p className="text-red-500 text-xs mt-1">
//                         {formik?.errors?.employees?.[index]?.lastName}
//                       </p>
//                     )}
//                 </div>

//                 <div>
//                   <input
//                     type="email"
//                     name={`employees[${index}].email`}
//                     placeholder="Enter the email"
//                     className="border rounded-sm w-60 px-2 py-1 border-gray-400"
//                     value={formik?.values?.employees?.[index]?.email}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   {formik?.touched?.employees?.[index]?.email &&
//                     formik?.errors?.employees?.[index]?.email && (
//                       <p className="text-red-500 text-xs mt-1">
//                         {formik?.errors?.employees?.[index]?.email}
//                       </p>
//                     )}
//                 </div>
//               </div>

//               <div className="flex justify-center items-center space-x-3 mt-2">
//                 {formik?.values?.employees?.length - 1 === index && (
//                   <>
//                     <button
//                       type="button"
//                       className="border px-6 py-2 text-center rounded-sm cursor-pointer bg-blue-400 border-gray-400"
//                       onClick={formik.handleSubmit}
//                     >
//                       Submit
//                     </button>

//                     <button
//                       type="button"
//                       className="border px-6 py-2 text-center rounded-sm cursor-pointer bg-green-500 border-gray-400"
//                       onClick={handleAddField}
//                     >
//                       +ADD
//                     </button>
//                   </>
//                 )}

//                 {formik?.values?.employees?.length > 1 && (
//                   <button
//                     type="button"
//                     className="border px-6 py-2 text-center rounded-sm cursor-pointer bg-red-500 border-gray-400"
//                     onClick={() => handleRemoveField(index)}
//                   >
//                     Remove
//                   </button>
//                 )}
//               </div>
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default FormikPractice;
