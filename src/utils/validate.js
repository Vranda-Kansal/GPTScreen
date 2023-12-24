export const checkValidation = (email, password) => {
  const isEmailTrue = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordTrue =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailTrue) return "Enter a valid email Id";
  if (!isPasswordTrue) return "Enter a valid password!";

  return null;
};
