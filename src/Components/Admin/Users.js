import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Users = () => {
    
    const [users, setUsers] = useState([]);
    // var id = useParams().id

    const getApi = () => {
        axios
            .get("http://localhost:4001/register/getregiuser")
            .then((res) => {
                console.log(res.data.data);
                setUsers(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {

        getApi()

    }, [])

    const deleteUser = (id) => {
        axios
            .delete("http://localhost:4001/appintment/delete/" + id)
            .then((res) => {
                getApi();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Helmet>
            {/* <button onClick={getApi} class="btn btn-info">
                Appointments List
            </button> */}
            <table class="table table-hover">
                <thead class="table table-primary">
                    <tr>
                        <th>img</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Remove User</th>
                        
                        
                        
                    </tr>
                </thead>

                <tbody>
                    {users &&
                        users?.map((u) => {
                            return (
                                <tr>
                                    <td>
                                        <a
                                            class="avatar avatar-sm me-2"
                                            href="/react/template/patient/doctor-profile"
                                        >
                                            <img
                                                class="avatar-img rounded-circle"
                                                src="https://doccure.dreamguystech.com/react/template/210634dca875b5880520c51b4577e6aa.jpg"
                                                alt="User"
                                                style={{ width: "50px", height: "50px" }}
                                            />
                                        </a>
                                    </td>

                                    <td>{u?.name}</td>
                                    <td>{u?.age}</td>
                                    <td>{u?.gender}</td>
                                    <td>{u?.role?.name}</td>
                                    <td>{u?.email}</td>
                                    
                                    

                                    <td>
                                        <button
                                            class="btn btn-danger"
                                            onClick={() => deleteUser(u._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};


