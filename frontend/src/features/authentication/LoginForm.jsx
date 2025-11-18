import { useState } from 'react';
import { PiEnvelopeSimple } from 'react-icons/pi';
import TextField from '../../ui/TextField';
import BtnPrimary from '../../ui/BtnPrimary';
import toast from 'react-hot-toast';
import useLogin from './uselogin';
import Loading from '../../ui/Loading';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { handleLogin, isPending } = useLogin(formData);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill out all field');

      return;
    }

    handleLogin();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-between h-96 gap-y-56"
      noValidate
    >
      <div className="flex flex-col gap-y-10">
        <TextField
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Email"
          icon={<PiEnvelopeSimple className="text-gray-400 size-7" />}
          type="email"
        />

        <TextField
          value={formData.password}
          onChange={handleChange('password')}
          placeholder="Password"
          type="password"
        />
      </div>

      <BtnPrimary
        classname="flex justify-center items-center gap-x-2"
        type={'submit'}
      >
        Log in
        {isPending ? <Loading /> : null}
      </BtnPrimary>
    </form>
  );
}
