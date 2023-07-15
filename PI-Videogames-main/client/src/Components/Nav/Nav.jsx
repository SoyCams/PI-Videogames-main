/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { connect } from 'react-redux';
import { deleteByName } from '../../Redux/Actions';
import SearchBar from '../SearchBar/SearchBar';
import {Link} from "react-router-dom"

const Nav = (props) => {
  const handleDelete = () =>{
    props.deleteByName()
  }
  return (
    <div>
      <SearchBar />
      <Link to="/home" onClick={handleDelete}>Home</Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return {
    deleteByName: ()=>dispatch(deleteByName())
  }
}

export default connect(null, mapDispatchToProps)(Nav);
