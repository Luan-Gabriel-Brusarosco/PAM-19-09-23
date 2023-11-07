import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

    import Parse from 'parse/react-native.js';
    import AnsyncStorage from '@react-native-async-storage/async-storage';

    Parse.setAsyncStorage(AnsyncStorage);
    const Api_ID = 'MS4tZJ76c9U9nrVG5nUArxtXR3AFTXp9gjvddXdq';
    const JS_Key = 'JOcAMXYD49wALIHUsqEP9CQhl2cpX7TBEbu6sa6u';
    Parse.initialize(Api_ID,JS_Key);
    Parse.serverURL = 'https://parseapi.back4app.com/';

    import 'react-native-get-random-values';

    export default function Cadastrar() {
    return (
        <SafeAreaView style={styles.container__safe}>
        <View style={styles.container}>
          <TextInput
          placeholder={'Produto'}
          style={style.input}
          />
        </View>
    </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
        container__safe:{
            flex: 1
          },
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          } 
    });