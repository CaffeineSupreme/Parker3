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
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './Home.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(2),
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
  marginBottom: '10px', 
};

function Home() {
  const [openDialog, setOpenDialog] = useState(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);};
  const date = moment().format("MMM Do YY");
  useEffect(() => {
    console.log(localStorage.getItem("name"));
  }, []);


  // List of parking lots for us to add the student parking lots
  const parkingLots = [
    { building: "Building 1", lot: "Lot B", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "", lot: "Lot F", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276419" },
    { building: "", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096" },
    { building: "", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
  
  ];

   // List of closest parking lots by building
   const closeLots = [
    { building: "Building 1", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 2", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 3", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 4", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 4A", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 5", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 6", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 7", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 8", lot: "Lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096"},
    { building: "Building 9", lot: "Stucture 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 13", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 15", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 17", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 20", lot: "lot F1", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276419" },
    { building: "Building 21", lot: "lot F1", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276419" },
    { building: "Building 22", lot: "lot F1", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276419" },
    { building: "Building 23", lot: "lot F1", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276419" },
    { building: "Building 24", lot: "lot J", busyTime: "10:00 AM - 11:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/690096" },
    { building: "Building 24A", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 24B", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 24C", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 24D", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 24E", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 25", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 26", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 26A", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 28", lot: "Lot T", link: "https://www.cpp.edu/maps/?id=1130#!m/280769" },
    { building: "Building 29", lot: "Lot F9", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276415" },
    { building: "Building 30", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 31", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 32", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 33", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 34", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 35", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 41", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 42", lot: "Structure 2", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276389" },
    { building: "Building 83", lot: "Lot T", link: "https://www.cpp.edu/maps/?id=1130#!m/280769" },
    { building: "Building 162", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 163", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
    { building: "Building 164", lot: "Structure 1", busyTime: "8:00 AM - 9:00 AM", link: "https://www.cpp.edu/maps/?id=1130#!m/276504" },
  
  ];

  const safeLots = [
    { building: "Building 1", lot: "Lot R", link: "https://www.cpp.edu/maps/?id=1130#!m/280766" },
    { building: "Building 2", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 3", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 4", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 4A", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 5", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 6", lot: "Lot R", link: "https://www.cpp.edu/maps/?id=1130#!m/280766" },
    { building: "Building 7", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 8", lot: "Lot R", link: "https://www.cpp.edu/maps/?id=1130#!m/280766" },
    { building: "Building 9", lot: "Lot R", link: "https://www.cpp.edu/maps/?id=1130#!m/280766" },
    { building: "Building 13", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 15", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 17", lot: "Lot R", link: "https://www.cpp.edu/maps/?id=1130#!m/280766" },
    { building: "Building 20", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 21", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 22", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 23", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 24", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 24A", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 24B", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 24C", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 24D", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 24E", lot: "lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 25", lot: "Lot K", link: "https://www.cpp.edu/maps/?id=1130#!m/280773" },
    { building: "Building 26", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 26A", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 28", lot: "Lot T", link: "https://www.cpp.edu/maps/?id=1130#!m/280769" },
    { building: "Building 29", lot: "Lot E2", link: "https://www.cpp.edu/maps/?id=1130#!m/276397" },
    { building: "Building 30", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 31", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 32", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 33", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 34", lot: "Lot M", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/638421" },
    { building: "Building 35", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 41", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 42", lot: "Lot B", link: "https://www.cpp.edu/maps/?id=1130#!m/276399" },
    { building: "Building 83", lot: "Lot E1", link: "https://www.cpp.edu/maps/?id=1130#!m/276398" },
    { building: "Building 162", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 163", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
    { building: "Building 164", lot: "Lots F5, F9, F10", busyTime: "1:00 PM - 2:00 PM", link: "https://www.cpp.edu/maps/?id=1130#!m/276417" },
  
  ];


  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPreference, setSelectedPreference] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [searchInput, setSearchInput] = useState(""); //for the search bar
  const [filteredParkingLots, setFilteredParkingLots] = useState(closeLots);

  // Filters the lots shown in the table through the time slot selection or the app search bar on the top right
  const filterParkingLots = () => {
    let selectedList;
    if (selectedPreference === "close") {
      selectedList = closeLots;
    } else if (selectedPreference === "easy") {
      selectedList = safeLots;
    } else {
      selectedList = parkingLots;
    }
    const filteredLots = selectedList.filter((lot) => {
      const matchesBuilding = lot.building.toLowerCase().includes(selectedBuilding.toLowerCase());
      const matchesSearch = lot.lot.toLowerCase().includes(searchInput.toLowerCase()); //to help match the search regardless of caps
      const matchesTime = selectedTime === "" || lot.busyTime !== selectedTime; //changed so the time slot search returns lots that are not busy at the time slot
      return matchesSearch && matchesTime && matchesBuilding;
    });

    setFilteredParkingLots(filteredLots);
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <Typography variant="h6">
            Welcome to Parker!
          </Typography>
          <Typography>
            A CPP Student parking assistant where you can filter the lots depending on what building your class is at or what time you will arrive on campus. You will then have the choice between finding the closest parking lot or the parking lot where you have the best chance of finding parking.
          </Typography>
        </DialogContent>
      </Dialog>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Welcome to Parker {JSON.parse(localStorage.getItem("name"))}!
          </Typography>
          <Typography variant="h6" noWrap>
            Date: {date}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for lot"
              inputProps={{ 'aria-label': 'search' }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  filterParkingLots();
                }
              }}
            />
          </Search>
          <Button
            variant="contained"
            color="primary"
            href="https://forms.gle/jrcybyds9kV59biJ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feedback
          </Button>
        </Toolbar>


        </AppBar>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/Parkerlogo.png" alt="Parker Logo" style={{ cursor: 'pointer' }}
        onClick={() => window.location.reload()}
        />
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
                <MenuItem value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</MenuItem>
                <MenuItem value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</MenuItem>
                <MenuItem value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</MenuItem>
                <MenuItem value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</MenuItem>
                <MenuItem value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</MenuItem>
                <MenuItem value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</MenuItem>
                <MenuItem value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</MenuItem>
                <MenuItem value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</MenuItem>
                <MenuItem value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</MenuItem>
                <MenuItem value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</MenuItem>
                <MenuItem value="7:00 PM - 8:00 PM">7:00 PM - 8:00 PM</MenuItem>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Setting selected preference for parking, either closest or easily available*/}
      <div style={centerContainerStyle}>
          <Typography variant="h6" className="time_slot">
            Select Building:
          </Typography>
          <div style={flexContainerStyle}>
            <Select
              id = "buildingDropdown"
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              {/* Maps the entire list of buildings into the dropdown */}
              {closeLots.map((building) => (
                <MenuItem key={building.building} value={building.building}>
                  {building.building}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

      {/* Setting selected preference for parking, either closest or easily available*/}
      <div style={centerContainerStyle}>
          <Typography variant="h6" className="time_slot">
            Select Preference:
          </Typography>
          <div style={flexContainerStyle}>
            <Select
              value={selectedPreference}
              onChange={(e) => setSelectedPreference(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              {/* Add building options here */}
              <MenuItem value="close">Absolute closest</MenuItem>
              <MenuItem value="easy">Better chance</MenuItem>
            </Select>
            <FilterButton class="btn btn-outline-warning ml-auto" onClick={filterParkingLots}>
                Filter
              </FilterButton>
          </div>
        </div>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Building</b></TableCell>
              <TableCell><b>Relevant student parking lot</b></TableCell>
              <TableCell><b>Busy Time</b></TableCell>
              <TableCell><b>Link</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredParkingLots.map((lot, index) => (
              <TableRow key={index}>
                <TableCell>{lot.building}</TableCell>
                <TableCell>{lot.lot}</TableCell>
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
