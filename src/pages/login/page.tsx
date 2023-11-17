import TextField from "../../components/Textfield";
import "../style.css";

export default function Login() {
    return <div>
        <TextField type="standart" placeholder="Email" label="Email" />
        <TextField type="standart" placeholder="Password" label="Password" />
    </div>
}