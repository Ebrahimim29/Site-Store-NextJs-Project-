const Loading = () => {
    return(
        <div className="container"
        style={{width:"100%",
                height:"100vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#fa3",
                gap:"25px"}}>
            
            {/* اسپینر با دو حلقه */}
            <div style={{position:"relative", width:"60px", height:"60px"}}>
                <div style={{
                    position: "absolute",
                    width: "60px",
                    height: "60px",
                    border: "4px solid rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    borderTop: "4px solid #fff",
                    animation: "spin 1s linear infinite"
                }}></div>
                <div style={{
                    position: "absolute",
                    width: "40px",
                    height: "40px",
                    top: "10px",
                    left: "10px",
                    border: "4px solid rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    borderBottom: "4px solid #fff",
                    animation: "spin 0.8s linear infinite reverse"
                }}></div>
            </div>
            
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"5px"}}>
                <span style={{color:"#fff", fontSize:"20px", fontWeight:"600", letterSpacing:"2px"}}>بارگذاری</span>
                <span style={{color:"rgba(255,255,255,0.7)", fontSize:"14px"}}>لطفاً صبر کنید...</span>
            </div>
            
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
};

export default Loading;