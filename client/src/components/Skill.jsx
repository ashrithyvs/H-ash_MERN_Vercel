function Skill(props) {
  return (
    <div className=" mx-auto ">
      <h5 className="mb-3 d-flex justify-content-center ">{props.name}</h5>
      <div className="progress mb-3" style={{ height: "5px", width: "200px" }}>
        <div
          className="progress-bar "
          role="progressbar"
          style={{ width: props.percent, background: "#916dd5" }}
        />
      </div>
    </div>
  );
}
export default Skill;
