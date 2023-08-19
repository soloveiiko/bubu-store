export const nameField = {
  name: 'name',
  type: 'text',
  placeholder: 'Імʼя',
  errorMessage: 'Name is not valid!',
  label: 'Імʼя',
  required: true,
  // pattern: '^[A-Za-z0-9]{3,16}$',
};
export const numberField = {
  name: 'tel',
  type: 'tel',
  placeholder: 'Телефон',
  errorMessage: 'Tel is not valid!',
  label: 'Телефон',
  required: true,
  // pattern: '',
};
export const emailField = {
  name: 'email',
  type: 'email',
  placeholder: 'E-mail',
  errorMessage: 'E-mail is not valid!',
  label: 'E-mail',
  required: true,
  // pattern: '',
};
export const mixField = {
  name: 'value',
  type: 'text',
  placeholder: 'Телефон або e-mail',
  errorMessage: 'Tel or e-mail is not valid!',
  label: 'Телефон або e-mail',
  required: true,
  // pattern: '',
};
export const passwordField = {
  name: 'password',
  type: 'password',
  placeholder: 'Пароль',
  errorMessage: 'Password is not valid!',
  label: 'Пароль',
  required: true,
  // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{8,20}$`,
};
const Inputs = (props) => {
  const { errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="">
      <input className="" {...inputProps} onChange={onChange} />
      {/*<span className="">{errorMessage}</span>*/}
    </div>
  );
};
export default Inputs;
