const Loading = () => {
    return (
        <div className="container"
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fa3",
                gap: "20px"
            }}>
            <div style={{
                width: "50px",
                height: "50px",
                border: "5px solid rgba(255,255,255,0.3)",
                borderTop: "5px solid #fff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
            }}></div>
            <span style={{ color: "#fff", fontSize: "18px", fontWeight: "500" }}>Loading...</span>
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