import styles from "../ActionButton/ActionButton.module.scss";

interface ActionButton {
    onClick: (el: any | undefined) => void,
    label: string,
    param?: any
}

interface ActionButtonProps {
    listButton: Array<ActionButton>,

}

const ActionButton = ({listButton}: ActionButtonProps) => {
    return (
        <div className={styles.footer}>
            {listButton.map(el => (
                <button onClick={() => el.onClick(el.param)} key={el.label}>
                    {el.label}
                </button>
            ))}
        </div>
    )
}

export default ActionButton;