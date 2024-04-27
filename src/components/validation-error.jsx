import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const ValidationError = () => {
    const {error} = useSelector(state => state.auth);

    // console.log(error);

    const errorMessage = useCallback(() => {
      return Object.keys(error).map(name => {
        const msg = Array.isArray(error[name]) ? error[name].join(', ') : error[name]
        return `${name} - ${msg}`
      })
    },[error])

  return (error !== null &&  errorMessage().map(error =>
    <div class="alert alert-danger m-1 p-1 text-start" role="alert" key={error}>
    {error}
  </div>))
}

export default ValidationError
