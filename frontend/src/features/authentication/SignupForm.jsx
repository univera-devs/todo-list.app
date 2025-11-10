import { useState } from 'react';
import { PiEnvelopeSimple, PiUser, PiUserBold } from 'react-icons/pi';
import TextField from '../../ui/TextField';
import BtnPrimary from '../../ui/BtnPrimary';
import toast from 'react-hot-toast';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill out all field');

      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col justify-between"
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
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          placeholder="Confirm Password"
          type="password"
        />
        <BtnPrimary type="submit">Sign Up</BtnPrimary>
      </div>
    </form>
  );
}
