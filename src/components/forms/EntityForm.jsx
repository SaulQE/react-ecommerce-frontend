import PropTypes from 'prop-types';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

export const EntityForm = ({
	formData,
	handleChange,
	handleSubmit,
	fields,
}) => {
	return (
		<form
			className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
			onSubmit={handleSubmit}
		>
			{fields.map((field, index) => (
				<FormInput
					key={index}
					label={field.label}
					type={field.type}
					name={field.name}
					value={String(formData[field.name])}
					onChange={handleChange}
					placeholder={field.placeholder}
					required={field.required}
				/>
			))}
			<FormButton label='Submit' type='submit' />
		</form>
	);
};

EntityForm.propTypes = {
	formData: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	fields: PropTypes.array.isRequired,
};
