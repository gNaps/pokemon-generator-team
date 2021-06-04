import styles from './ModalError.module.scss'

interface ModalErrorProps {
    message: string, 
    handleClose: () => void
}

const ModalError = ({message, handleClose}: ModalErrorProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <img src="/fail.png" />
                </div>
                <div className={styles.modal_body}>
                    <p>
                        {message}
                    </p>

                    <button
                        type="button"
                        onClick={() => handleClose()}
                    >
                        <p>Ok</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalError;