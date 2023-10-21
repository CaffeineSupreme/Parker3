import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './Home.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const FilterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'green',
  color: theme.palette.common.white,
  marginLeft: 'auto',
}));

const centerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '20px',
};

const flexContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

function Home() {
  const date = moment().format("MMM Do YY");
  useEffect(() => {
    console.log(localStorage.getItem("name"));
  }, []);


  // List of parking lots for us to add the student parking lots
  const parkingLots = [
    { name: "Lot B", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { name: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { name: "Structure 2", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { name: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096" },

  
  ];

  const [selectedTime, setSelectedTime] = useState("");
  const [searchInput, setSearchInput] = useState(""); //for the search bar
  const [filteredParkingLots, setFilteredParkingLots] = useState(parkingLots);

  // Filters the lots shown in the table through the time slot selection or the app search bar on the top right
  const filterParkingLots = () => {
    const filteredLots = parkingLots.filter((lot) => {
      const matchesSearch = lot.name.toLowerCase().includes(searchInput.toLowerCase()); //to help match the search regardless of caps
      const matchesTime = selectedTime === "" || lot.busyTime === selectedTime;
      return matchesSearch && matchesTime;
    });

    setFilteredParkingLots(filteredLots);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Welcome to Parker, {JSON.parse(localStorage.getItem("name"))}!
            </Typography>
            <Typography variant="h6" noWrap>
              Date: {date}
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {/* search bar */}
              <StyledInputBase
                placeholder="Search for lot"
                inputProps={{ 'aria-label': 'search' }}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                //to be able to press enter for the search bar and allow the filter function
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    filterParkingLots();
                  }
                }}
              />
            </Search>
          </Toolbar>

        </AppBar>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/Parkerlogo.png" alt="Parker Logo" />
      </div>
      <div style={centerContainerStyle}>
        <div style={flexContainerStyle}>
          <div style={centerContainerStyle}>
            <Typography variant="h6" className="time_slot">
              Select Time Slot:
            </Typography>
            <div style={flexContainerStyle}>
              <Select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                {/* copy and paste this structure to choose the busy times for it and make sure it matches the busy time we added in table */}
                <MenuItem value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</MenuItem>
                <MenuItem value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</MenuItem>
              </Select>
              
              <FilterButton class="btn btn-outline-warning ml-auto" onClick={filterParkingLots}>
                Filter
              </FilterButton>
            </div>
          </div>
        </div>
      </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Student Parking Lots</b></TableCell>
              <TableCell><b>Busy Time</b></TableCell>
              <TableCell><b>Link</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredParkingLots.map((lot, index) => (
              <TableRow key={index}>
                <TableCell>{lot.name}</TableCell>
                <TableCell>{lot.busyTime}</TableCell>
                <TableCell>
                  <Button  class="btn btn-info" href={lot.link}>
                    Go to Lot
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
