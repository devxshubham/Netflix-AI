export const validate = (email, password) => {
  const emailResult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const passwordResult =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailResult) return "email is not valid";
  if (!passwordResult) return "password is not value";
  else return null;
};
