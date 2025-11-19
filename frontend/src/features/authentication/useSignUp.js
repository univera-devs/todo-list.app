import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/AuthContext';
// import useNavigateHome from '../../../../../freelnacer-app/src/hooks/useNavigateHome';
import useNavigateHome from '../../hook/useNavigateHome';

export default function useSignUp(formData) {
  const { setToken } = useAuthContext();
  const navigateHome = useNavigateHome();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signUp,
  });

  const handleRegister = async () => {
    try {
      const { message, token } = await mutateAsync(formData);
      toast.success(message);
      setToken(token);
      navigateHome();
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  return { handleRegister, isPending };
}
