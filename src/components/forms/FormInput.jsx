import PropTypes from 'prop-types';

export const FormInput = ({
	label,
	type,
	name,
	value,
	onChange,
	placeholder,
	required,
}) => {
	return (
		<div className='mb-4'>
			<label
				className='block text-gray-700 text-sm font-bold mb-2'
				htmlFor={name}
			>
				{label}
			</label>
			<input
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
				id={name}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
};
