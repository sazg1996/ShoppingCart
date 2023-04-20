import styles from './Image.module.css'
const Image=({url})=>{
    return (
       <div className={styles.imageContainer}>
        <img src={url}/>
       </div>
       
    )
    
    }
    export default Image