import React, { useState } from 'react';

function Switch(props: {
    defaultValue: boolean
    onChange: (value: boolean) => void
}) {
    const [status, setStatus] = useState(props.defaultValue);

    const onClick = () => {
        if (typeof props.onChange === 'function')
            props.onChange(!status)
        setStatus(!status);
    }
    return (
        <div
            className={`wrp-switch ${status ? 'wrp-switch-on' : 'wrp-switch-off'}`}
            onClick={onClick}
        >
        </div>
    )
}

export default Switch;