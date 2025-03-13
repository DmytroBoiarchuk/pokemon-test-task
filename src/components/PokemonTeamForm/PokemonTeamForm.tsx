import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal";
import { XMarkIcon } from "@heroicons/react/24/solid";
import PokemonTeam from "../PokemonTeam/PokemonTeam";
import SearchSelect from "../SearchSelect/SearchSelect";
import Button from "../Button";
import useFetchPokemons from "../../hooks/useFetchPokemons";

const schema = yup
  .object({
    name: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed"),
    surName: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, "Only letters are allowed"),
    chosenTeam: yup
      .array()
      .of(yup.string().required("4 pokemons are required"))
      .min(4, "4 pokemons should be selected")
      .max(4, "4 pokemons should be selected")
      .required("Chosen team is required"),
  })
  .required();

export interface Inputs {
  name: string;
  surName: string;
  chosenTeam: string[];
}

const PokemonTeamForm = () => {
  const [pokemons, fetchError, setFetchError, modalIsOpen, setModalIsOpen] =
    useFetchPokemons();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      chosenTeam: [],
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    if (fetchError) {
      setFetchError(null);
    }
  };

  return (
    <>
      <form
        className="flex p-10 flex-col justify-center items-center gap-5 min-w-xxl h-fit bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl shadow-lg text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Pick your pokemon`s team</h1>
        <div className="flex gap-2 w-full">
          <Input
            name="name"
            register={register}
            label="Name"
            error={errors.name?.message}
          />
          <Input
            name="surName"
            register={register}
            label="Surname"
            error={errors.surName?.message}
          />
        </div>
        <SearchSelect
          name="chosenTeam"
          register={register}
          label="Chose 4 pokemons"
          pokemons={pokemons}
          teamValue={watch().chosenTeam}
          setTeamValue={setValue}
          error={errors.chosenTeam?.message}
        />

        <Button appearance="primary" size="lg" type="submit">
          Submit
        </Button>
      </form>

      <Modal modalIsShown={modalIsOpen} setModalIsShown={setModalIsOpen}>
        <div>
          <Button
            appearance="text"
            className="absolute top-2.5 right-2.5"
            size="sm"
            onClick={handleCloseModal}
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </Button>
          <span className="font-bold">
            {fetchError ? "Error: " : `Your Team!`}
          </span>
          {fetchError ? (
            <p>{fetchError.message}</p>
          ) : (
            <PokemonTeam pokemons={watch().chosenTeam} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default PokemonTeamForm;
