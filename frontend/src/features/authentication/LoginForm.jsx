import { useState } from 'react';
import { PiEnvelopeSimple } from 'react-icons/pi';
import TextField from '../../ui/TextField';
import BtnPrimary from '../../ui/BtnPrimary';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      className="w-full flex flex-col justify-between gap-y-52"
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

      <BtnPrimary type="submit">Log in</BtnPrimary>
    </form>
  );
}
