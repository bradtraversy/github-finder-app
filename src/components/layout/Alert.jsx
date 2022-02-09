import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8`}
      style={{ visibility: alert ? 'visible' : 'hidden' }}
    >
      <div className='alert alert-error flex justify-start'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='w-6 h-6 mx-2 stroke-current'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
          ></path>
        </svg>
        <p>{alert?.msg}</p>
      </div>
    </div>
  )
}

export default Alert
