import styles from './ModalSuccess.module.scss'

interface ModalSuccessProps {
    message: string, 
    handleClose: () => void
}

const ModalSuccess = ({message, handleClose}: ModalSuccessProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <img src="/success.png" />
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

export default ModalSuccess;