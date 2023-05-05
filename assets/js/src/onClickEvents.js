const buttonInit = (button) => {
  button.addEventListener("click", () => {
    console.log("this button got clicked");
  });
};

const alternativeFunc = () => {
  return false;
};

export default buttonInit;
export { alternativeFunc };
