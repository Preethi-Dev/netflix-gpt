export const checkValidData = (email, password, name = "not supplied") => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z\s-]+$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "password is not valid";
  if (!isNameValid && name !== "not supplied") return "name is not valid";

  return null;
};
