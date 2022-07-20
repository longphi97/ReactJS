import './App.css';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TabForm from './components/tabform/tabform'
import ActionForm from './components/ActionForm/actionform'
import TableData from "./components/TableData/tabledata";
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [ isDisplay, setIsDisplay ] = useState(true);

  const toggleButton = (e ) => {
    setIsDisplay(!isDisplay)
  }
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
          <div style={{ borderBottom: "1px solid brown", width: "100%" }}>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                fontSize: "48px",
              }}
            >
              Quản Lý Công Việc
            </h1>
          </div>
          </Grid>
          <Grid container spacing={2}>
            <Grid style={{ margin: "8" , padding : "20px"}} item xs={4}>
              { isDisplay ?<TabForm toggleButton={toggleButton} /> : "" }
            </Grid>
          <Grid item  xs={isDisplay ? 8 : 12}>
            <ActionForm toggleButton={toggleButton}/>
            <TableData />
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
