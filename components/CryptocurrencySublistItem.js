import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../styles/variables';

function SublistItem({ label, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} :</Text>
      {children}
    </View>
  );
}

SublistItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

SublistItem.defaultProps = {
  children: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
  },
  label: {
    color: colors.primary,
    fontSize: fontSizes.small,
    minWidth: 100,
    marginRight: 8,
  },
});

export default SublistItem;
