import { useState } from 'react'

const Input = ({label, state, type = 'text', setState}) => {

    return (
        <div class="form-floating mb-2">
            <input type={type} class="form-control" value={state} onChange={e => setState(e.target.value)} id="floatingInput" placeholder={label} />
            <label for="floatingInput">{label}</label>
        </div>
    )
}

export default Input
