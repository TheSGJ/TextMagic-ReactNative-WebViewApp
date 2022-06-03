import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview'

const TEXTMAGIC = 'https://text-magic-react.vercel.app/'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:'100%'}}>
        <WebView 
          source={{uri: TEXTMAGIC}}
          onLoad={console.log("Loaded the WebView!")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
