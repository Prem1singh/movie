import Element from "./element";
export default function Container(props){
    

    return(
        <div className="flex gap-10 flex-wrap cursor-pointer ps-8">
        {
      props.data.map(
        (d,i)=>{
          return(
            <Element data={d} key={d.id}></Element>
          )
        }
      )
     }
        </div>
    )
}