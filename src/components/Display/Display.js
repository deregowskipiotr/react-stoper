//import styles from './Display.module.scss';

const Display = ({time}) => {

  const {ms, s, m, h} = time;
  return(
    <div >
      <span>
        {h >=10 ? h:"0" + h}
      </span>
      :
      <span>
        {h >=10 ? m:"0" + m}
      </span>
      :
      <span>
        {h >=10 ? s:"0" + s}
      </span>
      .
      <span>
        {h >=10 ? ms:"" + ms}
      </span>
      
    </div>
  )
}

export default Display;