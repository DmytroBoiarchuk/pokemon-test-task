import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchSelect from "../components/SearchSelect/SearchSelect";

const mockPokemons = [
    { name: "Pikachu", url: "1" },
    { name: "Charmander", url: "2" },
    { name: "Squirtle", url: "3" },
    { name: "Bulbasaur", url: "4" },
    { name: "Jigglypuff", url: "5" },
    { name: "Meowth", url: "6" },
    { name: "Psyduck", url: "7" },
    { name: "Snorlax", url: "8" },
    { name: "Gengar", url: "9" },
    { name: "Eevee", url: "10" },
];

const Template: React.FC<any> = (args) => {
    const [teamValue, setTeamValue] = useState<string[]>([]);

    return (
        <SearchSelect
            {...args}
            teamValue={teamValue}
            setTeamValue={(_, value) => setTeamValue(value as string[])}
        />
    );
};

export default {
    title: "Components/SearchSelect",
    component: SearchSelect,
    argTypes: {
        register: { table: { disable: true } },
        name: { table: { disable: true } },
        setTeamValue: { table: { disable: true } },
        pokemons: { table: { disable: true } },
        teamValue: { table: { disable: true } },
        error: {
            control: { type: "select" },
            options: ["No Error", "Show Error"],
            mapping: {
                "Show Error": "Some error message",
                "No Error": undefined,
            },
            description: "If Validation failed",
        },
    },
    tags: ["autodocs"],
    parameters: {
        controls: { expanded: true },
    },
} as Meta<typeof SearchSelect>;

export const Default: StoryObj<typeof SearchSelect> = {
    render: (args) => <Template {...args} />,
    args: {
        pokemons: mockPokemons,
        label: "Select Pokémon",
        error: undefined,
        name: "chosenTeam",
    },
    parameters: {
        docs: {
            description: {
                story: `Allows user to input text, and choose a result from the resulting list to show it as a badge inside the select.  
                    
        **Available Pokémons:**  
        - Pikachu  
        - Charmander  
        - Squirtle  
        - Bulbasaur  
        - Jigglypuff  
        - Meowth  
        - Psyduck  
        - Snorlax  
        - Gengar  
        - Eevee`,
            },
        },
    },
};
