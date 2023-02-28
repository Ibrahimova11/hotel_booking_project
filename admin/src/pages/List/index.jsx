import "./style.css"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import Datatable from "../../components/Datatable"

const List = ({columns}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List
