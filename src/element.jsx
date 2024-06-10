
export default function Element(props) {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return(
        <div className="w-[320px] relative group overflow-hidden rounded-lg shadow-md shadow-[white]">
            <img src={IMGPATH+props.data.poster_path} alt="" />
            <div className="w-[100%] bg-white absolute bottom-[-100%] group-hover:bottom-0 left-0 p-5 text-center  font-bold duration-200 rounded-lg" ><p>{props.data.title}</p></div>
        </div>
    )
}