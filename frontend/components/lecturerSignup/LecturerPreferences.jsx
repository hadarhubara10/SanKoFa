import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ControlledRadioButtonsGroup from '../common/ControlledRadioButtonsGroup';
import InputLabel from '../common/InputLabel';
import ToAttention from '../common/ToAttention';
import SelectWithTypography from '../common/SelectWithTypography';
import PickTimeRadioButtons from './PickTimeRadioButtons';
import SelectMultiple from './SelectMultiple';

const LecturerPreferences = () => {
  const [showPickTime, setShowPickTime] = useState(false);
  const { handleSubmit, getValues } = useFormContext();
  const openPickTime = () => {
    if (getValues('lecturerTime') == 'כן') {
      setShowPickTime(true);
    }
  };
  // lecturerTimeCannotBeEmpty = getValues('lecturerTime') === undefined;
  const styles = {
    toAttention: {
      marginTop: '20px',
      marginBottom: '20px',
      height: '100%',
    },
    boxTextField: {
      marginTop: '20px',
      height: '11vh',
    },
    boxRadioGroup: {
      marginBottom: '10px',
      marginTop: '10px',
    },
  };
  return (
    <Box>
      <Box css={styles.toAttention}>
        <ToAttention
          text={'לתשומת ליבך️, המידע על ההרצאה שלך יוצג לעמותות. '}
        />
      </Box>
      <Box css={styles.boxRadioGroup}>
        <InputLabel text={'האם יש שעות וימים שבאופן קבוע לא נוחים לך?'} />
        <PickTimeRadioButtons />
        <SelectMultiple
          multiple
          title={'אופי המפגש'}
          placeholder={'רשימת תחומים'}
          nameOfField={'field'}
          name={'natureOfTheMeeting'}
          url="https://62cae2111eaf3786ebb29598.mockapi.io/api/natureOfTheMeeting"
        />
      </Box>
    </Box>
  );
};

export default LecturerPreferences;
