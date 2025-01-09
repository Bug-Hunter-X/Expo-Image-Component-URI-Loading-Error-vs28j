import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native-web';

const MyImage = ({ uri }) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(true);
      setLoading(false);
    }, 5000); // Timeout after 5 seconds
    return () => clearTimeout(timeoutId);
  }, [uri]);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Failed to load image.</Text>}
      {!loading && !error && (
        <Image source={{ uri: uri }} style={styles.image} onError={() => setError(true)} onLoad={() => setLoading(false)}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MyImage;