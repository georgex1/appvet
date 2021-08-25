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

export const inputStyles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  errorText: {
    color: "#ff0000",
  }
});

export const mainCard = StyleSheet.create({
  card: {
    backgroundColor: '#17B890',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5,
    justifyContent: "space-between"
  },
  cardInner: {
    flexDirection: 'row',
    justifyContent: "space-between"
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
    
  },
  green:{
    color: '#082D0F'
  }
});

export const listPetsStyles = StyleSheet.create({
    listStyle: {
    },
    listInner: {
      marginBottom: 10,
    },
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
  listContainer: {
    width: '90%',
    alignSelf: 'center'
  },
  listStyle: {
    backgroundColor: '#17B890',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    padding: 5
  },
  listHeight:{
    height: '70%'
  },
  itemList: {
    width: '100%',
    marginBottom: 15,
  },
  itemListInner: {
    flexDirection: 'row',
    justifyContent: "space-between"
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
  },
  green:{
    color: '#082D0F'
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
      width: '95%',
      margin: 10
  },link: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    marginTop: 60,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center'
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
    margin: 15,
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
  mapPreviewInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: { 
    width: '100%',
    height: '100%',
  }
})

export const modalStyles = StyleSheet.create({
  modalOverviewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
  modalStyle: {
      width: '80%',
      paddingHorizontal: 10,
      paddingVertical: 40,
      alignItems: 'center',
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      backgroundColor: '#f7f9fe'
  },
  title:{
    marginBottom: 20,
    fontFamily: 'FiraSans-Bold'
  },
  modalError: {
    fontSize: 11,
    color: 'red',
    textAlign: 'center'
  },
  modalInputText: {
    borderColor: 'black',
    borderRadius: 2,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    margin: 10
  },
  modalTitle:{
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center'
  },
  centerText:{
    marginBottom: 10,
    textAlign: 'center'
  },
  bottonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
})