import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function FilterSelect({
	options,
	placeholder,
	singleValue = false,
	setChoice,
}) {
	return (
		<Select
			onChange={(choice) =>
				setChoice(singleValue ? choice : choice.map((c) => c.value))
			}
			className="w-[32.1%]"
			options={options}
			closeMenuOnSelect={singleValue && true}
			components={animatedComponents}
			isMulti={!singleValue}
			placeholder={placeholder}
			instanceId={placeholder}
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					borderRadius: "0.4rem",
				}),
			}}
		/>
	);
}
