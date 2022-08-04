import React from 'react';
import { job_type, cultural_values } from '../../constJobList';
import {
  Grid,
  Checkbox,
  FormControlLabel,
  Typography,
  Box
 } from '@mui/material';

const ApplyFilter = ({filters, handleFilters}) => {
  return (
    <>
    <Grid container spacing={2} mt={1} mb={1} p={2} bgcolor={'#e7ebf0'} columns={12}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          to apply filters for job-type:
        </Typography>
      </Grid>
      <Box display={'flex'} width={'30%'}>
        { job_type.map((d, i) => (
          <><Grid item xs={12}>
            <FormControlLabel
              label={d}
              control={
                <Checkbox
                  data-test-id='job-type'
                  checked={filters?.includes(d)}
                  onChange={() => handleFilters(d)}
                />
              }
            />
          </Grid> <span style={{paddingTop: '12px', paddingRight: '8px'}}>{(i < 3) && 'or'}</span> </>
          ))
        }
      </Box>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          to apply filters for job-type:
        </Typography>
      </Grid>
      <Box display={'flex'} width={'30%'}>
        { cultural_values.map((d, i) => (
          <><Grid item xs={12}>
            <FormControlLabel
              label={d}
              control={
                <Checkbox
                  data-test-id='job-type'
                  checked={filters?.includes(d)}
                  onChange={() => handleFilters(d)}
                />
              }
            />
          </Grid> <span style={{paddingTop: '12px', paddingRight: '8px'}}>{(i < 3) && 'or'}</span></>
          ))
        }
      </Box>
    </Grid>
    </>
  )
}

export default ApplyFilter;