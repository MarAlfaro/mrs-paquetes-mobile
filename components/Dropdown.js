import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({ items, placeholder, searchPlaceholder, onValueChange, defaultValue }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || null);

  useEffect(() => {
    // Actualiza el valor si el valor predeterminado cambia
    if (defaultValue !== value) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <View style={{ width: '100%', zIndex: open ? 1000 : 1 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleValueChange}
        setItems={() => {}}
        searchable={true}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        style={styles.dropdown}
        textStyle={styles.text}
        placeholderStyle={styles.placeholder}
        dropDownContainerStyle={styles.dropdownContainer}
        searchTextInputStyle={styles.searchInput}
        dropDownStyle={styles.dropDownStyle}
        itemStyle={styles.item}
        arrowIconStyle={styles.arrowIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    height: 56,
    backgroundColor: '#ffffff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    $dark: {
      backgroundColor: '#1E1E1E',
      color: '#EAEAEA',
      borderColor: '#333333',
      borderWidth: 1, 
      elevation: 2,
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 4 },
    }
  },
  text: {
    fontSize: 16,
    color: '#495057',
    $dark: {
      color: '#FFFFFF',
    }
  },
  placeholder: {
    fontSize: 16,
    color: '#6c757d',
    $dark: {
      color: '#FFFFFF',
    }
  },
  dropdownContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
    $dark: {
      backgroundColor: '#1E1E1E',
      color: '#EAEAEA',
      borderColor: '#333333',
      borderWidth: 1,
      elevation: 2,
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 4 },
    }
  },
  searchInput: {
    color: '#495057',
    $dark: {
      color: '#FFFFFF',
    }
  },
  dropDownStyle: {
    backgroundColor: '#ffffff',
  },
  item: {
    justifyContent: 'center',
    height: 40,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    $dark: {
      color: '#FFFFFF',
    }
  },
});

export default Dropdown;
