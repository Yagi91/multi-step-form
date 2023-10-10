import PropTypes from 'prop-types';

const TextInput = ({ label, required, ...rest }) => {
    return (
        <div className='flex flex-col text-left'>
            <label>
                {label} {required && <span>*</span>}
            </label>
            <input
                {...rest}
                onFocus={(e) => e.target.style.outline = '2px solid blue'}
                onBlur={(e) => e.target.style.outline = ''}
                className='border-2 border-gray-400 rounded-md p-2'
            />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool
};

export default TextInput;