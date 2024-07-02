export default function Main(props) {
    const {nasaData} = props;
    return(
        <>
        <div className="imgContainer">
            <img src={nasaData?.hdurl} className="bgImage" />
        </div>
        </>
    )
}