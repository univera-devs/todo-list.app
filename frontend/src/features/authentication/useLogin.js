import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/authService';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';
import useNavigateHome from '../../../../../freelnacer-app/src/hooks/useNavigateHome';

export default function useLogin(formData) {
  const { setToken } = useAuthContext();
  const navigateHome = useNavigateHome();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
  });

  const handleLogin = async () => {
    try {
      const { message, token } = await mutateAsync(formData);
      const data = await mutateAsync(formData);
      console.log(data);
      toast.success(message);
      setToken(token);
      navigateHome();
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Login failed');
    }
  };

  return { handleLogin, isPending };
}
