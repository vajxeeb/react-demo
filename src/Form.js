
import { useState, useEffect } from "react"
import banana from './images/banana.jpeg'
import cucuber from './images/cucuber.jpg'
import orange from './images/orange.jpeg'
import empty from './images/empty.png'
import Axios from 'axios'

import './App.css';
function Form() {

  const [f_name, setName] = useState("")
  const [l_name, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAdress] = useState("")
  const [job, setJob] = useState("")
  const [status, setStatus] = useState("")
  const [p_image, setP_image] = useState("")
  const [p_name, setP_name] = useState("")
  const [image, setImage] = useState("")

  const [productList, setProductList] = useState([])
  const [userList, setUserList] = useState([])

  const handleTextChange = (e) => {
    e.preventDefault()
    setName("")
  }
  ////////Get user data//////////
  const getUser = () => {
    Axios.get("http://localhost:4000/get-user").then((res) => {
      setUserList(res.data)
    })
  }
  ////////Add user data////////////
  const AddUser = () => {
    Axios.post("http://localhost:4000/create-user", {
      f_name: f_name,
      l_name: l_name,
      email: email,
      address: address,
      job: job,
      status: status
    }).then((res) => {
      console.log(res.statusText)
      // setUserList([
      //   ...userList, {
      //     f_name: f_name,
      //     l_name: l_name,
      //     email: email,
      //     address: address,
      //     job: job,
      //     status: status
      //   }
      // ])
    })

  }

  ////////Delete user dat /////////
  const Delete = (id) => {
    Axios.delete("http://localhost:4000/delete-user/" + id).then((res) => {
      setUserList(
        userList.filter((val) => {
          return val.id !== id;
        })
      )
    })
  }

  // ///////Search user data ////////
  const Search = (name) => {
   {name == "" ? getUser(): 
    Axios.get("http://localhost:4000/search-user/" + name).then((res) => {
      setUserList(res.data)
    })
  }
  }

    const addProductHandler = async (e) => {
         e.preventDefault()
        const formData = new FormData()
        formData.append('p_name', p_name)
        formData.append('p_image', p_image)
        await Axios.post('http://localhost:4000/add-product', formData).then((res) => {
          console.log(res.status)
        })
    }
 
    const getproduct = async () => {
      await Axios.get('http://localhost:4000/get-product').then((res) => {
      setProductList(res.data)
      console.log(`http://localhost:4000/${productList[0].p_image}`)
      //console.log(res.data)
      })
    }

  //   useEffect(() => {
  //     const getSingleProductData = async () => {
  //       const { data } = await Axios.get('http://localhost:4000/get-product')    
  //     setImage(data[0].p_image)

  //     }
  //     getSingleProductData()
  // },[])


  // ('#exampleModal').on('show.bs.modal', function (event) {
  //   var button = (event.relatedTarget) // Button that triggered the modal
  //   var recipient = button.data('whatever') // Extract info from data-* attributes
  //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   var modal = (this)
  //   modal.find('.modal-title').text('New message to ' + recipient)
  //   modal.find('.modal-body input').val(recipient)
  // })













  return (
    <div className="">
      <div className="container mt-5 shadow bg-white">
        <form className="row g-5 needs-validation mt-5 mb-0 mx-3 mr-3">
          <h4>ຟອມປ້ອນຂໍ້ມູນ</h4>
          <div class="col-md-4 position-relative">
            {/* <label for="validationTooltip01" className="form-label text-left">ຊື່</label> */}
            <input type="text" className="form-control " value={f_name} id="validationTooltip01" placeholder="ຊື່" onChange={(e) => setName(e.target.value)} required />
            <div class="valid-feedback">
              Enter your name!
            </div>
          </div>
          <div className="col-md-4 position-relative">
            {/* <label for="validationTooltip02" class="form-label">ນາມສະກຸນ</label> */}
            <input type="text" class="form-control" value={l_name} id="validationTooltip02" placeholder="ນາມສະກຸນ" onChange={(e) => setSurname(e.target.value)} required />
            <div class="valid-feedback">
              Enter your lastname!
            </div>
          </div>
          <div className="col-md-4 position-relative">
            {/* <label for="validationTooltipUsername" class="form-label">ອີເມວ</label> */}
            <div className="input-group has-validation">
              <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
              <input type="text" class="form-control" value={email} id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" placeholder="ອີເມວ" onChange={(e) => setEmail(e.target.value)} required />
              <div class="valid-feedback">
                Enter your email!
              </div>
            </div>
          </div>
          <div className="col-md-4 position-relative">
            {/* <label for="validationTooltip03" class="form-label">ທີ່ຢູ່</label> */}
            <input type="text" class="form-control" value={address} id="validationTooltip03"
              placeholder="ທີ່ຢູ່" onChange={(e) => setAdress(e.target.value)} required />
            <div class="valid-feedback">
              Enter your address!
            </div>
          </div>
          <div className="col-md-4 position-relative">
            {/* <label for="validationTooltip05" class="form-label">ອາຊີບ</label> */}
            <input type="text" class="form-control" value={job} id="validationTooltip05" placeholder="ອາຊີບ" onChange={(e) => setJob(e.target.value)} required />
            <div class="valid-feedback">
              Enter your job!
            </div>
          </div>
          <div className="col-md-4 position-relative">
            {/* <label for="validationTooltip04" class="form-label">ສະຖານະ</label> */}
            <select className="form-select" value={status} id="validationTooltip04" onChange={(e) => setStatus(e.target.value)} required>
              <option selected disabled value="">ເລືອກສະຖານະ...</option>
              <option>ໂສດ</option>
              <option>ແຕ່ງງານ</option>
              <option>ອື່ນໆ</option>
            </select>
            <div class="valid-feedback">
              Enter your status!
            </div>
          </div>


          <div className="d-flex">
            <div className="col-md-2">
              <button className="btn btn-success  btn-block rounded-pill mb-5"
                type="submit" onClick={() => AddUser, getUser}>
                <i class="fa fa-plus-square p-1"></i>
                ບັນທຶກ
              </button>
            </div>
          </div>
          <br></br>
        </form>


        <div className=" mt-3 md-6 float-right mr-3">
          <button className="btn btn-success rounded-pill" onClick={getUser}>
            <i className="fa fa-refresh "></i>
          </button>

        </div>
        <div className=" mt-3 md-6 float-right mr-5">
          <input type="text" onChange={(e) => Search(e.target.value)} 
          class="form-control  text-left mb-2" id="pwd"
            placeholder={"ຄົ້ນຫາ"} name="pswd" />
        </div>

        <div className="container mt-2">
          <table className="table  table-borderless table-responsive-sm table-hover mb-4">
            <thead className="table-warning">
              <tr>
                <th scope="col">ລຳດັບ</th>
                <th scope="col">ຊື່</th>
                <th scope="col">ນາມສະກຸນ</th>
                <th scope="col">ອີເມວ</th>
                <th scope="col">ທີ່ຢູ່</th>
                <th scope="col">ສະຖານະ</th>
                <th scope="col">ອາຊີບ</th>
                <th scope="col">ລືບ</th>
                <th scope="col">ແກ້ໄຂ</th>
              </tr>
            </thead>
            {
              (userList.length == 0 ? <div className="justify-content-center " style={{ height: '15rem' }}>
                <img src={empty} className="img-fluid" alt="manago" />
              </div> :
                userList.map((value) => {
                  return (
                    <tbody>
                      <tr className="">
                        <th scope="row">{value.id}</th>
                        <td>{value.f_name}</td>
                        <td>{value.l_name}</td>
                        <td>{value.email}</td>
                        <td>{value.address}</td>
                        <td>{value.job}</td>
                        <td>{value.status}</td>
                        <td className="">
                          <button className="btn btn-outline-danger rounded-pill"><i class="fa fa-remove p-1" onClick={() => { Delete(value.id) }}></i>ລຶບ</button>
                        </td>
                        <td className="">
                          <button className="btn btn-outline-success rounded-pill"><i class="fa fa-edit p-1"
                            onClick={() =>
                              setName(value.f_name)

                            }
                          ></i>ແກ້ໄຂ</button>
                        </td>
                      </tr>
                    </tbody>

                  )
                })
              )
            }
          </table>
        </div>
      </div>

      <div className="container shadow bg-white">
        <br />
        <div className="d-flex">
          <div>
          <input className="form-control" placeholder="ຊື່ຫມາກໄມ້" onChange={(e)=> setP_name(e.target.value)}/>
          </div>
          <div className="mx-3">
            <input class="form-control" type="file" id="formFile" onChange={(e) => setP_image(e.target.files[0])} />
          </div>
          <div className="mx-2">
            <button className="btn btn-danger" type="submit" onClick={addProductHandler} method="POST" encType="multipart/form-data"
            >ບັນທຶກ</button>
          </div>
          <div className="mx-2">
            <button className="btn btn-danger" type="submit" onClick={getproduct}
            >ສະແດງລາຍການຫມາກໄມ້</button>
          </div>
        </div>

        <h4 className="mt-3">ລາຍການຫມາກໄມ້</h4>

        <div className="container d-flex mt-4 mx-4">
          <div className="row">
            <div className="col-md-3 position-relative shadow-lg p-3 mb-5 bg-white rounded">
              <div className="d-fluid" style={{ height: '15rem', }}>
                <img src={`http://localhost:4000/${productList[0].p_image}`} className="img-fluid" alt="manago" />
              </div>
            </div>
            <div className="col-md-3 mx-auto position-relative shadow-lg p-3 mb-5 bg-white rounded" >
              <div className="" style={{ height: '15rem' }}>
                <img src={orange} className="img-fluid" alt="manago" />
              </div>
            </div>

            <div className="col-md-3 mx-auto position-relative shadow-lg p-3 mb-5 bg-white rounded">
              <div className="" style={{ height: '15rem' }}>
                <img src={cucuber} className="img-fluid" alt="manago" />
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-4">
          <div className="row">
            <div className="col-md-3 shadow mb-4 bg-dark text-white pt-1 rounded-pill">
              <h5>ຫມາກກ້ວຍ</h5>
            </div>
            <div className="col-md-3 mx-auto shadow mb-4 bg-dark text-white pt-1 rounded-pill">
              <h5>ຫມາກກ້ຽງ</h5>
            </div>
            <div className="col-md-3 mx-auto shadow mb-4 bg-dark text-white pt-1 rounded-pill">
              <h5>ຫາມາກແຕງ</h5>
            </div>
          </div>
        </div>


        <div className="form-group mt-3 mb-5">
          <button className="btn btn-success float-left rounded-pill shadow-sm"><b>
            <i class="bi bi-arrow-bar-left"></i>
          </b>ກັບຄືນ</button>
          <button className="btn btn-success float-right rounded-pill shadow-sm">ຕໍ່ໄປ <b>
            <i class="bi bi-arrow-bar-right p-1"></i>
          </b></button>
        </div>
      </div>









    </div>


  );


}
export default Form;
