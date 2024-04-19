
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';



export default function App() {
  return (
    

    <View style={styles.container}>
      
      <View id='header' style={styles.menu}>
        <TouchableOpacity>
        <Image source={require('./assets/menu.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./assets/logoProfil.png')}/>
        </TouchableOpacity>
        
      </View>
      <View>
        <Text style={styles.text}>Cześć, </Text>
        <Image style={styles.QrCode} source={require('./assets/kodQr.png')}/>
        <Text style={styles.textObiady}>Obiady w tym miesiącu:{"\n"}</Text>
        <Text style={styles.textDzisNaObiad}>Dzisiaj na obiad:{"\n"}makaron z serem</Text>
      </View>
    </View>
  );
}

 //po czesc wpisz {imie} i {nazwisko}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:0,
  },
  menu: {
    marginTop:50,
    width: '100%',
    height:'5%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:10,
    
  },
  logo:{
    marginRight:16,
  },
  text:{
    fontSize:32,
    width:'100%',
    height:40,
    paddingLeft:19,
    marginTop:100,
  },
  QrCode:{
    alignSelf:'center',
    marginTop:50,
  },
  textObiady:{
    fontSize:20,
    alignSelf:'center',
  },
  textDzisNaObiad:{
    fontSize:40,
    alignSelf:'center',
  }
  
});
