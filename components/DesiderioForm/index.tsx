import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Desiderio } from "../../models/Desiderio";
import { categories } from "../../api/fakeApi"
import ActionButton from "../ActionButton";
import styles from "../DesiderioForm/DesiderioForm.module.scss";

interface DesiderioFormProps {
    desiderio?: Desiderio,
    setFormDesiderio: Dispatch<SetStateAction<boolean>>
}

const DesiderioForm = ({desiderio, setFormDesiderio}: DesiderioFormProps) => {
    const [newDesiderio, setNewDesiderio] = useState<Desiderio>({
        id: 0,
        name: "",
        description: "",
        place: "",
        price: 0,
        categoryId: 0,
        categoryDescription: "",
        slug: "",
        booked_by: undefined,
        listaDesiderio: undefined
    });

    if(desiderio) {
        setNewDesiderio(desiderio);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, field: string) => {
        const copyNewDesiderio: Desiderio = { ...newDesiderio, [field]: e.currentTarget.value };
        setNewDesiderio(copyNewDesiderio);
    }

    const handleChangeCategory = (categoryId: number) => {
        const copyNewDesiderio: Desiderio = { ...newDesiderio, categoryId: categoryId };
        setNewDesiderio(copyNewDesiderio);
    }

    const handleClickSave = () => {
        console.log("salvo oggetto", newDesiderio);
    }

    const handleClickCancel = () => {
        setFormDesiderio(false);
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
                <h1>Create new desiderio</h1>
                <div>
                    <h3>Name</h3>
                    <input type="text" value={newDesiderio?.name} onChange={(e) => {handleChange(e, "name")}} />
                </div>
                <div>
                    <h3>Description <em>(Optional)</em></h3>
                    <textarea value={newDesiderio?.description} onChange={(e) => {handleChange(e, "description")}} />
                </div>
                <div>
                    <h3>Price</h3>
                    <input type="number" value={newDesiderio?.price} onChange={(e) => {handleChange(e, "price")}} />
                </div>
                <div>
                    <h3>Where to buy it</h3>
                    <p>Digit url or name of the shop.</p>
                    <input type="text" value={newDesiderio?.place} onChange={(e) => {handleChange(e, "place")}} />
                </div>
                <div>
                    <h3>Category</h3>
                    <div className={styles.category_container}>
                    { 
                        categories.map((cat => (
                            <div 
                                key={cat.id}
                                className={`${newDesiderio?.categoryId === cat.id ? `${styles.active}` : ''}`}
                                onClick={() => handleChangeCategory(cat.id)} >
                                <img src={`/${cat.icon}`} />
                                <p>{cat.label}</p>
                            </div>
                        )))
                    }
                    </div>
                </div>
          </div>

          <ActionButton listButton={actionButton} />
        </>
    );
}

export default DesiderioForm;