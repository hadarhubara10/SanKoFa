import { Box } from '@mui/material';
import React from 'react';
import MainButtonNavigation from '../components/lecturerSignup/MainButtonsNavigation.jsx';

const lecturerSignup = ({ locations }) => {
  return (
    <Box>
      <MainButtonNavigation locations={locations} />
    </Box>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1500`
  );
  const data = await res.json();
  const locations = data?.result?.records;
  // Pass data to the page via props
  return { props: { locations } };
}

export default lecturerSignup;
