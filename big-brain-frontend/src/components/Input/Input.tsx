interface InputProps {
  label: string;
  type: string;
  name: string;
  className?: string;
}

const getCamelCase = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');

function Input({
  label, type, name, className = '',
}: InputProps) {
  return (
    <label htmlFor={getCamelCase(label)} className={className}>
      {label}
      <input type={type} name={name} id={getCamelCase(label)} />
    </label>
  );
}

export default Input;
