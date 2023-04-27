import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const router = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <div className="bg-gray-50 bg-image-login  h-full bg-no-repeat bg-cover">
      <div className="bg-blue-900 md:py-12 bg-opacity-50 w-full h-full">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // if successful
            //   auth.login(values.email);
            //   navigate(redirectRoute, { replace: true });
          }}
        >
          {({ isSubmitting }) => (
            <div className=" container  py-4 md:py-16  items-center justify-center">
              <div className=" mx-auto justify-center w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                <Form className="space-y-6">
                  <h5 className="text-xl md:text-2xl   text-center text-blue-600 font-bold ">
                    Login (Student)
                  </h5>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-lg font-normal text-gray-600 text-start"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="e.g che@gmail.com"
                    />
                    <div className="text-red-600">
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-lg font-normal text-gray-600 text-start"
                    >
                      Password
                    </label>

                    <Field
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-600 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <div className="text-red-600">
                      <ErrorMessage name="password" component="div" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-auto mt-2 text-white bg-blue-600 hover:bg-gray-600  focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                  >
                    Login Now
                  </button>

                  <div className="text-lg font-medium text-gray-600">
                    Forgot password? Contact ICT office
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
