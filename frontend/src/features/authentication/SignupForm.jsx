import { useState } from 'react';
import { PiEnvelopeSimple, PiUser, PiUserBold } from 'react-icons/pi';
import TextField from '../../ui/TextField';
import BtnPrimary from '../../ui/BtnPrimary';
import toast from 'react-hot-toast';

import useSignUp from './useSignUp';
import Loading from '../../ui/Loading';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const { handleRegister, isPending } = useSignUp(formData);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.password_confirmation
    ) {
      toast.error('Please fill out all fields');
      return;
    }
    handleRegister();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-between h-96"
      noValidate
    >
      <div className="flex flex-col gap-y-10">
        <TextField
          value={formData.name}
          onChange={handleChange('name')}
          placeholder="Name"
          icon={<PiUserBold className="text-gray-400 size-6" />}
          type="text"
        />

        <TextField
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Email"
          icon={<PiEnvelopeSimple className="text-gray-400 size-6" />}
          type="email"
        />

        <TextField
          value={formData.password}
          onChange={handleChange('password')}
          placeholder="Password"
          type="password"
        />

        <TextField
          value={formData.password_confirmation}
          onChange={handleChange('password_confirmation')}
          placeholder="Confirm Password"
          type="password"
        />
        <BtnPrimary
          classname="flex justify-center items-center gap-x-2"
          type={'submit'}
        >
          Sign Up
          {isPending ? <Loading /> : null}
        </BtnPrimary>
      </div>
    </form>
  );
}
