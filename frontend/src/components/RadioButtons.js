import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

/**
 * Custom component to create the radio buttons
 * of our SolicitarPresupuesto component
 * @param {*} props 
 */
const RadioButtons = (props) => {
    return (
        <Field
            component={(field) => (
                field.options.map(option => 
                    <div key={option.id} className={field.className}>
                    {/* className="col-lg-12" */}
                        <input
                            className={option.className ? option.className : ''}
                            id={option.id}
                            type='radio'
                            {...field.input}
                            value={option.value}
                            checked={option.value === field.input.value}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                )
            )}
            {...props}
        />
    );
};

/**
 * Ensures the proper stucture of
 * the props that will be passed
 * to our custom component
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