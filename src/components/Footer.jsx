export default function Footer(props) {
    const {handleToggleModal, nasaData} = props;

    return(
        <>
        <div className="footerContainer">
            <div className="footerGradient"></div>
            <div className="imgTitle">
                <h1>{nasaData?.title}</h1>
                <h2>Astronomy Picture of the Day Project</h2>
            </div>
            <button className="openModalBtn" onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </div>
        </>
    )
}