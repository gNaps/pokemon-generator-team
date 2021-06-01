import styles from "../ActionButton/ActionButton.module.scss";

interface ActionButton {
    onClick: () => void,
    label: string
}

interface ActionButtonProps {
    listButton: Array<ActionButton>,

}

const ActionButton = ({listButton}: ActionButtonProps) => {
    return (
        <div className={styles.footer}>
            {listButton.map(el => (
                <button onClick={el.onClick}>
                    {el.label}
                </button>
            ))}
        </div>
    )
}

export default ActionButton;