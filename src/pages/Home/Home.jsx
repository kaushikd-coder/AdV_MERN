import React, { useEffect, useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom"
import "./home.css"
import { toast } from 'react-toastify';
import Tables from '../../components/Tables/Tables';
import Spiner from '../../components/Spiner/Spinner';
import { addData } from '../../components/context/ContextProvider';
import { dltdata } from '../../components/context/ContextProvider';
import { deletfunc, exportToCsv, userGetFunc } from '../../services/Apis';


const Home = () => {

  const [showspin,setShowSpin] = useState(true);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("new")

  const navigate = useNavigate();

  const { useradd, setUseradd } = useContext(addData);
  const {deletedata, setDLtdata} = useContext(dltdata);


  const addUser = () => {
    navigate('/register');
  }

  const userGet = async() => {
    const response = await userGetFunc(search, gender, status, sort);
    if (response.status === 200) {
      setUserData(response.data.userData);
    }else{
      toast.error("error");
    }
  }

  const deleteUser = async(id) => {
    const response = await deletfunc(id);
    if (response.status === 200) {
      userGet();
      setDLtdata(response.data)
    }else{
      toast.error("error");
    }
  }

  // export to csv
  const exportUser = async() => {
    const response = await exportToCsv();
    
    if (response.status === 200) {
      window.open(response.data.downloadUrl, "");   
    }else{
      toast.error("error");
    }
  }

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  },[search, gender, status, sort])

  return (
    <>
      { 
        useradd ?  <Alert variant="success" onClose={() => setUseradd("")} dismissible>{useradd.userData.fname.toUpperCase()} Succesfully Added</Alert>:""
      }
      <div className="container">
      <div className="main_div">
        {/* search add btn */}
        <div className="search_add mt-4 d-flex justify-content-between">
          <div className="search col-lg-4">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange = {(e) =>  setSearch(e.target.value)}
              />
              <Button variant="success" className='search_btn'>Search</Button>
            </Form>
          </div>
          <div className="add_btn">
            <Button variant="primary" onClick={addUser}> <i class="fa-solid fa-plus"></i>&nbsp; Add User</Button>
          </div>
        </div>
        {/* export,gender,status */}

        <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
          <div className="export_csv">
            <Button className='export_btn' onClick={exportUser}>Export To Csv</Button>
          </div>
          <div className="filter_gender">
            <div className="filter">
              <h3>Filter By Gender</h3>
              <div className="gender d-flex justify-content-between">
                <Form.Check
                  type={"radio"}
                  label={`All`}
                  name="gender"
                  value={"All"}
                  onChange={(e) => setGender(e.target.value)}
                  defaultChecked
                />
                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* short by value */}
          <div className="filter_newold">
            <h3>Short By Value</h3>
            <Dropdown className='text-center'>
              <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                <i class="fa-solid fa-sort"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSort("new")}>New</Dropdown.Item>
                <Dropdown.Item onClick={() => setSort("old")}>Old</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* filter by status */}
          <div className="filter_status">
            <div className="status">
              <h3>Filter By Status</h3>
              <div className="status_radio d-flex justify-content-between flex-wrap">
                <Form.Check
                  type={"radio"}
                  label={`All`}
                  name="status"
                  value={"All"}
                  onChange={(e) => setStatus(e.target.value)}
                  defaultChecked
                />
                <Form.Check
                  type={"radio"}
                  label={`Active`}
                  name="status"
                  value={"Active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <Form.Check
                  type={"radio"}
                  label={`InActive`}
                  name="status"
                  value={"InActive"}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        showspin ? <Spiner /> : <Tables userData= {userData}
                                        deleteUser={deleteUser}     
        />

      }
    </div> 
    </>
      )
}

      export default Home