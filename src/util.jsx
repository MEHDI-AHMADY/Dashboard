import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const showAlert = ({ title, text, icon, confirmButtonText }) => {

  mySwal.fire({
    title: <p>{title}</p>,
    text: text,
    icon: icon,
    confirmButtonText: confirmButtonText,
  });

};


const isLogin = (adminName) => {
  if(adminName === 'mehdi') {
    return true
  }
  return false
}
export { showAlert , isLogin }
