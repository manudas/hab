import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

const RadioButtons = (props) => (
    <Field
        component={(field) => ({input, options}) =>  (
            options.map(option => 
                <div key={option.id} className={input.className}>
                {/* className="col-lg-12" */}
                    <input
                        className={option.className ? option.className : ''}
                        id={option.id}
                        type='radio'
                        {...input}
                        value={option.value}
                        checked={option.value === input.value}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )
        )}
        {...props}
    />
);


/*

const RadioButtons = (props) => (
    <Field
        component= {renderRadioButtons.bind(this, {input, options})}
        {...props}
    />
);

const renderRadioButtons = (field, input, options) => {
    options.map(option => 
        <div key={option.id} className={input.className}>
        
        <input
        className={option.className ? option.className : ''}
        id={option.id}
        type='radio'
        {...input}
        value={option.value}
        checked={option.value === input.value}
    />
    <label htmlFor={option.id}>{option.label}</label>
</div>
)
}

*/
RadioButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        className: PropTypes.string
    })),
    name: PropTypes.string.isRequired
};

export default RadioButtons;