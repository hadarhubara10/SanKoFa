import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';

function PickTimeRadioButtons({ theme }) {
  const styles = {
    button: {
      width: '90%',
      border: `2px solid ${theme.lightGrey} !important`,
      '&:focus': {
        border: `2px solid ${theme.purple} !important`,
      },
      color: 'black',
    },
    radioButton: {
      color: theme.lightGrey,
      '&.Mui-checked': {
        color: theme.purple,
      },
    },
  };
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="כן"
          control={<Radio sx={styles.radioButton} />}
          label="כן"
        />
        {value == 'כן' && (
          <Grid container sx={{ textAlign: 'center' }}>
            <Grid xs={4}>
              <Button sx={styles.button} variant="outlined">
                יום
                <BsChevronDown style={{ marginRight: 'auto' }} />
              </Button>
            </Grid>
            <Grid xs={4}>
              <Button sx={styles.button} variant="outlined">
                שעה
                <BsChevronDown style={{ marginRight: 'auto' }} />
              </Button>
            </Grid>
            <Grid xs={4}>
              <Box sx={styles.plusMinusBox}>
                <Image src={'/PlusCircle.svg'} width="38px" height="38px" />
                &nbsp;
                <Image src={'/MinusCircle.svg'} width="38px" height="38px" />
              </Box>
            </Grid>
          </Grid>
        )}
        <FormControlLabel
          value="אני גמיש\ה"
          control={<Radio sx={styles.radioButton} />}
          label="אני גמיש\ה"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default withTheme(PickTimeRadioButtons);
