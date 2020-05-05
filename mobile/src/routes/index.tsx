import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../hooks/auth';
import AppRotues from './app.routes';
import AuthRotues from './auth.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <AppRotues /> : <AuthRotues />;
};

export default Routes;
