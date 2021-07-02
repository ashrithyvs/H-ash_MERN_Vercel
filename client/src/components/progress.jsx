function Progress(props){
    return(
        <div className="progress col-4" style={{height: "5px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: props.percent}}></div>
               </div>
    )
}
export default Progress;