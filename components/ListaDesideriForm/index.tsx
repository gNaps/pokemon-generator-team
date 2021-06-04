import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ListaDesideri } from "../../models/ListaDesideri";
import ActionButton from "../ActionButton";
import styles from "../ListaDesideriForm/ListaDesideriForm.module.scss";
import ModalSuccess from "../ModalSuccess";
import { listaDesideriService } from "../../api/services/ListaDesideriService"
import ModalError from "../ModalError";

interface ListaDesideriFormProps {
    listaDesideri?: ListaDesideri,
    setFormLista: Dispatch<SetStateAction<boolean>>
}

const ListaDesideriForm = ({listaDesideri, setFormLista}: ListaDesideriFormProps) => {
    const [newLista, setNewLista] = useState<ListaDesideri>({
        id: 0,
        slug: "",
        name: "",
        notify_booked: false,
        invited_users: [],
        followers: [],
        desideri: [],
        keep_surprise: false,
        public: false,
        owner: undefined,
        created_at: "",
        description: ""
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    if(listaDesideri) {
        setNewLista(listaDesideri);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, field: string) => {
        const copyNewLista: ListaDesideri = { ...newLista, [field]: e.currentTarget.value };
        setNewLista(copyNewLista);
    }

    const handleClickSave = () => {
        console.log("Create new lista => ", newLista);
        const res = listaDesideriService.createNewLista(newLista);

        // Da capire cosa mi ritorna dal server!!
        if (res) {
            setShowSuccess(true);
        } else {
            setShowError(true);
        }
    }

    const handleClickCancel = () => {
        setFormLista(false);
      }

    const actionButton = [
        {
            label: "Save",
            onClick: handleClickSave
        },
        {
          label: "Cancel",
          onClick: handleClickCancel
        }
    ];

    return (
        <>
            <div className={styles.content}>
                <h1>Create lista desideri</h1>
                <div>
                    <h3>Name</h3>
                    <input type="text" value={newLista?.name} onChange={(e) => {handleChange(e, "name")}} />
                </div>
                <div>
                    <h3>Description <em>(Optional)</em></h3>
                    <textarea value={newLista?.description} onChange={(e) => {handleChange(e, "description")}} />
                </div>
                <div className={styles.checkbox_row}>
                    <input 
                        type="checkbox"
                        onChange={(e) => {handleChange(e, "public")}}
                    />
                    <p>
                        Public
                    </p>
                </div>
                <p className={styles.text_small}>
                    If selected all users will can invite other users.
                </p>
                <div className={styles.checkbox_row}>
                    <input 
                        type="checkbox"
                        onChange={(e) => {handleChange(e, "keep_surprise")}}
                    />
                    <p>
                        Keep surprise
                    </p>
                </div>
                <p className={styles.text_small}>
                    If selected you will not able to see what desideri will be book and by who.
                </p>
                <div className={styles.checkbox_row}>
                    <input 
                        type="checkbox"
                        onChange={(e) => {handleChange(e, "notify_booked")}}
                    />
                    <p>
                        Alert
                    </p>
                </div>
                <p className={styles.text_small}>
                    Alert me when a user booked a gift.
                </p>
          </div>

          <ActionButton listButton={actionButton} />

          { showSuccess &&
              <ModalSuccess message={"Success!"} handleClose={() => { setShowSuccess(false) }}/>
          }
          { showError &&
              <ModalError message={"Error!"} handleClose={() => { setShowError(false) }}/>
          }
        </>
    );
}

export default ListaDesideriForm;