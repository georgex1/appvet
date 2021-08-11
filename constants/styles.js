import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  screen: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  },
  box: {
    width: '80%'
  },
  button: {
    color: '#082D0F'
  }
});

export const mainCard = StyleSheet.create({
  card: {
    backgroundColor: '#17B890',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  title: {
    fontFamily: 'FiraSans-Bold'
  },
  column: {
    
  }
});

export const listPetsStyles = StyleSheet.create({
    listStyle: {
    },
    listInner: {
      marginBottom: 10
    }
});

export const buttonStyle = StyleSheet.create({
  button:{
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#082D0F',
    width: '30%',
    alignSelf: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'FiraSans-Bold',
  },
  buttonDelete: {
    color: '#082D0F'
  }
})

export const TreatmentsStyles = StyleSheet.create({
  listStyle: {
    backgroundColor: '#17B890',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    padding: 5
  },
  itemList: {
    width: '100%',
    marginBottom: 15
  },
  screen: {
    
  },
  backButton: {
    width: 80,
  },
  title: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 20,
  },
  title2: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 18
  },
  title3: {
    fontFamily: 'FiraSans-Regular',
    fontSize: 16,
  },
  itemMeds: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    padding: 5,
    backgroundColor: '#5E807F',
    color: 'white',
    marginBottom: 10
  },
  flexA: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  medItemText: {
    color: '#DEE5E5'
  }
});

export const headerStyles = StyleSheet.create({
  header: {
      backgroundColor: '#082D0F',
  },
  title: {
      fontSize: 22,
      color: '#FFF',
      fontFamily: 'FiraSans-Bold',
      alignSelf: 'flex-end'
  },
  backButton: {
    color: '#FFF',
  }
})

export const innerStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 20
  }
});

export const mainStyles = StyleSheet.create({
    screen: {
      marginTop: 40,
      backgroundColor: '#DEE5E5',
      flex: 1
    },
    title1: {
      fontSize: 24,
      textAlign: 'center',
      textTransform: 'uppercase',
      marginBottom: 20
    }
})

export const FormStyles = StyleSheet.create({
  container: {},
  title: {
  },input: {
      borderColor: 'black',
      borderRadius: 2,
      borderWidth: 1,
      padding: 10,
      width: '90%',
      margin: 10
  },
  error:{
      fontSize: 11,
      color: 'red',
      textAlign: 'center'
  },
  bottonsContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 30,
  },
  button: {
    color: '#082D0F'
  }
})

export const NavigatorStyles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 70,
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focus: {
    color: '#082D0F'
  }
})

export const ImageSelectorStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  preview: {
    width: 200,
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#082D0F',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    color: '#082D0F'
  }
})

export const placeStyles = StyleSheet.create({
  locationPicker: {
    marginVertical: 15,
  },
  mapPreview: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: '100%',
    height: 150,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button:{
    color: '#082D0F'
  },
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 6,
  },
  container: {
      flex: 1,
      margin: 30,
  },
  label: {
      fontSize: 18,
      marginBottom: 16,
  },
  input: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 2,
      paddingVertical: 4,
  },
  footer: {
      marginTop: 30,
  }
})