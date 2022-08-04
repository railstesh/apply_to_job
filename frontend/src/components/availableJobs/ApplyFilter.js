import React from 'react';
import { job_type, cultural_values } from '../../constJobList';
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
 } from '@mui/material';

const ApplyFilter = ({filters, handleFilters}) => {
  return (
    <>
    <Grid container spacing={2} mt={1} mb={1} p={2} bgcolor={'#e7ebf0'} columns={12}>
      <Grid item xs={6}>
        <Grid container columns={12}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              to apply filters for job-type:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup>
              { job_type.map(d => (
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
                ))
              }
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container columns={12}>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              to apply filters for cultural values:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormGroup>
              { cultural_values.map(d => (
                  <FormControlLabel
                    label={d}
                    control={
                      <Checkbox
                        checked={filters?.includes(d)}
                        onChange={() => handleFilters(d)}
                      />
                    }
                  />
                ))
              }
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default ApplyFilter;