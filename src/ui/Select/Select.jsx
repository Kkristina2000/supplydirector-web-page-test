import ReactSelect from 'react-select';

const Select = ({ title, placeholder }) => {

    return (
        <ReactSelect
            classNamePrefix="custom-select"
            placeholder={placeholder}
            title={title}
            // options={}
            value=''
            isMulti={true}
        />
    )
}

export default Select;
