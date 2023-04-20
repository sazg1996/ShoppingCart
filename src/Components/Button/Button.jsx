import styles from './Button.module.css';

const Button= ({execute,children,disabled})=>{
    return (
        <button className={styles.button} onClick={execute} disabled={disabled}>{children}</button>
    );
}
export default Button
