import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function FilterSelect({
	options,
	placeholder,
	singleValue = false,
	setChoice,
	value,
	classes,
}) {
	return (
		<Select
			onChange={(choice) => setChoice(choice)}
			className={`${classes}  xl:w-[32.1%] `}
			options={options}
			closeMenuOnSelect={singleValue && true}
			components={animatedComponents}
			isMulti={!singleValue}
			placeholder={placeholder}
			instanceId={placeholder}
			value={value}
			classNames={{
				control: () => "dark:bg-coolBlack border-black",
				menuList: () => "dark:bg-coolBlack",

				menuPortal: () => "dark:bg-gray-200",
				multiValue: () => "dark:bg-veryDarkBlue/80",
				multiValueLabel: () =>
					"dark:bg-veryDarkBlue dark:text-shadowLightBlue",
				option: () =>
					"transition duration-200 dark:coolBlack dark:hover:bg-shadowDarkBlue",
				singleValue: () => "dark:text-shadowLightBlue",
			}}
			styles={{
				control: (baseStyles) => ({
					...baseStyles,
					borderRadius: "0.4rem",
					borderColor: "coolBlack",
				}),
				menu: (baseStyles) => ({
					...baseStyles,
					zIndex: "10",
				}),
				option: (baseStyles, { isFocused }) => ({
					...baseStyles,
					backgroundColor: isFocused ? "rgba(120,120,120,0.2)" : "",
				}),
			}}
		/>
	);
}
