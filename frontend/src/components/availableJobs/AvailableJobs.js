import React, { useEffect, useState } from 'react';
import { Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Chip,
 } from '@mui/material';
 import { jobList } from '../../constJobList';
 import { Link } from 'react-router-dom';
import ApplyFilter from './ApplyFilter';

const AvailableJobs = () => {
  const [filters, setFilters] = useState([]);
  const [jobListData, setJobListData] = useState(jobList);

  const handleFilters = (d) => {
    if (filters?.includes(d)) {
      const newFilter = filters.filter((f) => f !== d);
      setFilters(newFilter);
    } else {
      setFilters([...filters, d]);
    }
  }

  useEffect(()=>{
    let list = [];
    jobList.map((d) => {
      if (filters.some(r => d.job_type.includes(r)) || filters.some(r => d.cultural_values.includes(r))) {
        console.log("filter", d)
        list = [...list, d];
      }
    })
    setJobListData(list);

    if (!filters.length)
      setJobListData(jobList);
  }, [filters])

  return (
    <Box>
      <ApplyFilter handleFilters={handleFilters} filters={filters}/>
      <Grid container spacing={2} mt={1} mb={1} p={2} bgcolor={'#e7ebf0'} columns={12}>
        {
          jobListData.map((d) => (
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    apply before: {d?.last_date}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {d?.company}
                  </Typography>
                  <Typography variant="body2" p={1}>              
                    {d?.location}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {
                      d?.job_type.map((j) => (
                        <Chip size="small" sx={{margin: '2px'}} label={j} />
                      ))
                    }
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {
                      d?.cultural_values.map((j) => (
                        <Chip size="small" sx={{margin: '2px'}} label={j} />
                      ))
                    }
                  </Typography>
                  <Typography variant="body2">              
                    <ul>
                      {
                        d?.description.map((des) => (
                          <li>{des}</li>
                        ))
                      }
                    </ul>
                    {/* well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'} */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link style={{padding: '10px'}} to={'/applyjob'}>Apply Job</Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default AvailableJobs;
