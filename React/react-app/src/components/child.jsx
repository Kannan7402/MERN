import React from 'react';
import Custom from './customElements';
import useForm from './customHooks'
function Child() {
  const { form, handleChange, handleSubmit, error } = useForm({});
  function handleClick() {
    alert('button clicked')
  }
  return (
    <>
      <h1>Custom element</h1>
      <Custom label={'click me'} onClick={handleClick}></Custom>
      <h2>Custom hook</h2>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' onChange={handleChange} value={form.name}></input>
      <label htmlFor='id'>id</label>
      <input type='text' name='id' onChange={handleChange} value={form.id}></input>
      <button onClick={handleSubmit}>submit</button>
      <p>{error}</p>
    </>
  )
}
export default Child