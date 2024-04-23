

const Input = ({label, state, type = 'text', setState}) => {

    return (
        <div className="form-floating mb-2">
            <input type={type} className="form-control" value={state} onChange={e => setState(e.target.value)} id="floatingInput" placeholder={label} />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    )
}

export default Input
