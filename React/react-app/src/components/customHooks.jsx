import { useState } from "react";

function useForm() {
  const [form, setForm] = useState({
    name: '',
    id: ''
  });
  const [error,setError]= useState('');
  function handleSubmit(e)
  {
    e.preventDefault();
    if(form.name==='')
    {
      setError('please enter name');
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return {
    form, 
    handleChange,handleSubmit,error
  };
}

export default useForm;
