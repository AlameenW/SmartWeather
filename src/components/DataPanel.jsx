import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from 'axios';
const DataPanel = () => {
    const [recipes, setRecipes] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;
    
    
    return (
      <>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Timezone</th>
                <th>Description</th>
                <th>Humidity</th>
              </tr>
            </thead>
          </Table>
        </div>
      </>
    );
}
export default DataPanel;