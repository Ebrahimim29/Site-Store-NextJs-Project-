import Link from "next/link";

const NotFound = () => {
    return(
        <div
            className="container"
            style={{width:"100%", height:"100vh",display:"flex",
                justifyContent:"center", alignItems:"center", backgroundColor:"yellow", flexDirection:"column"
            }}
        >
            <h2>صفحه مورد نظر یافت نشد</h2>
            <h2>خطایی رخ داده است🤒🤒🤒🤒</h2>
            <Link href={"/"}>Home</Link>

        </div>
    )
}

export default NotFound;