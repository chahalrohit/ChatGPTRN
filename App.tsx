import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messageView}>
        <TextInput
          placeholder="Enter your question"
          style={{
            width: '82%',
            borderWidth: 0.5,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
          }}>
          <Icons name="send" size={18} style={{marginLeft: 4}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },
});
