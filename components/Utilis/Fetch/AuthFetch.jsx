import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation, useRegisterMutation, useCompleteRegistrationMutation, useRequestResetpasswordMutation, useVerifypasswordTokenMutation } from "@/redux/userApiSlice";
import { setToken } from "@/user/authSlice";
// import { setEmail } from "@/user/forgotpassSlice";
import { toast } from 'react-toastify';
export const UseAuth = () => {
  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const [completeRegistration, { isLoading: completeRegistrationLoading }] = useCompleteRegistrationMutation()
  const [RequestResetpassword, { isLoading: RequestResetpasswordLoading }] = useRequestResetpasswordMutation()
  const [verifypasswordToken, { isLoading: verifypasswordTokenLoading }] = useVerifypasswordTokenMutation()
  const { auth } = useSelector((state) => state.persistedReducer);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const useLogin = async (email, password, roles) => {
    try {
      const response = await login({ email, password, roles }).unwrap()
      console.log(response)

      dispatch(setToken(
        {
          token: response.token,
          role: response.data.role
        }
      ));
      toast.success('Login successful')

    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }
  const useSignUp = async (data) => {
    try {

      await register(data).unwrap()
        .then((res) => {

          toast.success('Registration successful.... kindly check your email for verification process')
        })

    } catch (err) {
      console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const useCompleteRegistration = async (data) => {
    try {

      await completeRegistration({ 'token': data }).unwrap()
        .then((res) => {
          toast.success('Your account has been verified. Kindly proceed to login')

        })

    } catch (err) {
      console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const useRequestResetpassword = async (data) => {
    try {

      await RequestResetpassword(data).unwrap()
        .then((res) => {
          // dispatch(setEmail(

          // ))
          toast.success('An email has been sent to your email address containing your reset password guideline. Thank You')

        })

    } catch (err) {
      console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  const verifyToken = async (data) => {
    try {

      await verifypasswordToken(data).unwrap()
        .then((res) => {
          // toast.success('Your account has been verified. Kindly proceed to login')

        })

    } catch (err) {
      console.log(err)
      toast.error(err?.data?.message || err.error);
    }
  }
  return { useLogin, loginLoading, useSignUp, registerLoading, useCompleteRegistration, completeRegistrationLoading, useRequestResetpassword, RequestResetpasswordLoading, verifypasswordTokenLoading, verifyToken }
}
