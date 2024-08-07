import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigation';
import { AuthProvider } from './context/authContext';

export default function App() {
  return (
    <AuthProvider> 
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
