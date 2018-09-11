import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

const RadioButtons = (props) => (
    <Field
        component={({input, options}) => (
            options.map(option => 
                <div key={option.id} className={option.className ? option.className : ''} >
                {/* className="col-lg-12" */}
                    <input
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