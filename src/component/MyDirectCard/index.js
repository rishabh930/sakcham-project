import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyDirectCard = ({
  data = {
    associate_id: '3D739DB29',
    associate_name: 'yeshwant kumar singh',
    joinigleg: 'left',
    joiningDate: '21/04/16',
    joinigAmount: '4500',
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.headingtitle}>Associate Id:</Text>
        <Text style={styles.result}>{data?.associate_id}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.headingtitle}>Associate Name:</Text>
        <Text style={styles.result}>{data?.associate_name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.headingtitle}>Joinig Leg:</Text>
        <Text style={styles.result}>{data?.joinigleg}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.headingtitle}>Joining Date:</Text>
        <Text style={styles.result}>{data?.joiningDate}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.headingtitle}>Joining Amount:</Text>
        <Text style={styles.result}>{data?.joinigAmount}</Text>
      </View>
    </View>
  );
};

export default MyDirectCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 8,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    gap: 20,
    paddingHorizontal: 10,
  },
  headingtitle: {
    color: 'black',
    fontSize: 14,
    width: '50%',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  result: {
    // color: 'black',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    width: '50%',
    textTransform: 'uppercase',
  },
});
