export default function Sidebar(props) {
    const {handleToggleModal, nasaData} = props;

    return(
        <>
        <div className="sidebarContainer">
            <div className="imgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">
                <h2>{nasaData?.title}</h2>
                <div className="imgDescription">
                    <p>{nasaData?.explanation}</p>
                </div>
                <button className="closeModalBtn" onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        </>
    )
}