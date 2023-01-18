import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function FilterSelect({
	options,
	placeholder,
	singleValue = false,
	setChoice,
	value,
}) {
	return (
		<Select
			onChange={(choice) => setChoice(choice)}
			className="w-[32.1%] "
			options={options}
			closeMenuOnSelect={singleValue && true}
			components={animatedComponents}
			isMulti={!singleValue}
			placeholder={placeholder}
			instanceId={placeholder}
			value={value}
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					borderRadius: "0.4rem",
				}),
				menu: (baseStyles) => ({
					...baseStyles,
					zIndex: "10",
				}),
			}}
		/>
	);
}
