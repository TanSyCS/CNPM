import "./Logo.css";
function Logo() {
  return (
    <div>
      <img
        src={require("../assets/images/bku.svg").default}
        alt="logo"
        width={70}
        height={70}
      />
      <p id="Tp1">HCMUT_SPSS</p>
    </div>
  );
}
export default Logo;
