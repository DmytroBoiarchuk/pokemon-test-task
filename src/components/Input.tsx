import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./PokemonTeamForm/PokemonTeamForm";
import { Simulate } from "react-dom/test-utils";

interface Props {
  name: keyof Inputs;
  register: UseFormRegister<Inputs> | undefined;
  label: string;
  error: string | undefined;
}

const Input = ({ name, register, label, error }: Props) => {
  return (
    <label className="relative flex flex-col w-full">
      {label}
      <input
        className="input"
        placeholder={`Your ${label}`}
        {...(register ? register(name) : "")}
      />
      <p className="absolute -bottom-5 text-orange-500 text-sm">
        {error ?? " "}
      </p>
    </label>
  );
};

export default Input;
