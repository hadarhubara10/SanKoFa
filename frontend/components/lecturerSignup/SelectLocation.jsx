import { Box, FormHelperText, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { withTheme } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
const axios = require('axios').default;

const SelectLocation = ({ theme, locations }) => {
  const { register } = useFormContext(); // retrieve all hook methods
  const [listOflLocations, setListOflLocations] = useState([]);
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const styles = {
    box: {
      display: 'flex',
      textAlign: 'right',
    },
    boxSelect: {
      width: '100%',
      textAlign: 'right',
    },
  };
  return (
    <Box>
      <Box css={styles.box}>
        <Image
          src="/locationIcon.svg"
          width={'18'}
          height={'18'}
          alt="Location icon"
        />
        &nbsp;
        <Typography variant="body1">מקום מגורים</Typography>
      </Box>
      <Box styles={styles.boxSelect}>
        <FormControl sx={{ width: '100%', marginTop: '6px' }}>
          <Select
            {...register('location')}
            sx={{
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.purple,
              },
            }}
            size={'small'}
            value={location}
            onChange={handleChange}
            displayEmpty={true}
          >
            <MenuItem value="" disabled>
              <em>רשימת ישובים</em>
            </MenuItem>
            {locations?.length > 0 &&
              locations.map((item) => (
                <MenuItem key={item._id} value={item.שם_ישוב}>
                  {item.שם_ישוב}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default withTheme(SelectLocation);
