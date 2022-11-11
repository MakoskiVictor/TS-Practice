import useNewSubForm from "../../hooks/useNewSubForm";
import { Sub } from "../../types"

interface FormProps {
   onNewSub: (newSub: Sub) => void
}

const Form = ( { onNewSub } : FormProps ) => {

    const [inputValues, dispatch] = useNewSubForm();



    /* const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE) */

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }
 
    const handleSUbmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(inputValues)
        dispatch({type: "clear"})
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return(
        <div>
            <form onSubmit={handleSUbmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <button onClick={handleClear} type="button">Clear form</button>
                <button type="submit">Save new sub!</button>
            </form>
        </div>
    )
}

export default Form;