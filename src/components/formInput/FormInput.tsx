import { Container, Label, Input } from './formInput-style.js';

interface FormInputProps {
  type: string;
  label: string;
  name: string;
}

const FormInput = ({ type, label, name }: FormInputProps) => {
  return (
    <Container>
      <Label id={name}>{label}</Label>
      <Input type={type} name={name} />
    </Container>
  );
};

export default FormInput;
