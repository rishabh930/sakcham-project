import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import MyDirectCard from '../../component/MyDirectCard';

const MyDirect = () => {
  return (
    <>
      <Header title="My Direct" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {[
          {
            associate_id: '3D739DB29',
            associate_name: 'yeshwant kumar singh',
            joinigleg: 'left',
            joiningDate: '21/04/16',
            joinigAmount: '4500',
          },

          {
            associate_id: '3D739DB29',
            associate_name: 'yeshwant kumar singh',
            joinigleg: 'left',
            joiningDate: '21/04/16',
            joinigAmount: '4500',
          },
          {
            associate_id: '3D739DB29',
            associate_name: 'yeshwant kumar singh',
            joinigleg: 'left',
            joiningDate: '21/04/16',
            joinigAmount: '4500',
          },
          {
            associate_id: '3D739DB29',
            associate_name: 'yeshwant kumar singh',
            joinigleg: 'left',
            joiningDate: '21/04/16',
            joinigAmount: '4500',
          },
        ].map((item, id) => (
          <MyDirectCard data={item} key={id} />
        ))}
      </ScrollView>
    </>
  );
};

export default MyDirect;

const styles = StyleSheet.create({});
