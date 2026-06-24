const Login = () => {
    return (
        <div className="container"
            style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <h1 style={{ marginBottom: "20px" }}>
                Login Form
            </h1>
            <form>
                <div className="input-group" style={{ marginBottom: "20px" }}>
                    <span className="input-group-addon" id="sizing-addon2">@</span>
                    <input className="form-control" type="text" placeholder="UserName" aria-describedby="sizing-addon2" />
                </div>
                <div class="input-group" style={{ marginBottom: "20px" }}>
                    <span class="input-group-addon" id="sizing-addon2">ↈ</span>
                    <input type="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon2" />
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Login;