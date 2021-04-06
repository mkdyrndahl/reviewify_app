import React from 'react';

function UserOptions(props) {
    return (
        <div>
            {props.user.role === 'admin'
                ? 
                    <div>
                        <a className="btn btn-primary float-end m-2" href="/admin">Manage movies</a>
                        <h3 className="text-end m-2">Hello {props.user.login}!</h3>
                    </div>
                : props.user.role === 'user'
                    ?
                        <div>
                            <h3 className="text-end">Hello {props.user.login}!</h3>
                        </div>

                    :   <div>
                            <a className="btn btn-primary m-2 float-end m-2" href="/signin">Sign-In</a>
                            <a className="btn btn-primary m-2 float-end m-2" href="/signup">Sign-Up</a>
                        </div>
            }
        </div>
    );
}

export default UserOptions;