export const auth = (user: {}, next: () => void) => {
  try {
    localStorage.setItem("user", JSON.stringify(user) as string);
    next();
  } catch (error) {
    console.log(error);
  }
};
export const isAuth = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user") as string);
};
