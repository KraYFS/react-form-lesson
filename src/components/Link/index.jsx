import './styles.scss'

import { Link as ReactLink } from 'react-router-dom'

const isExternalLink = url => url?.startsWith('http')

const Link = ({ label, dest }) => {
  const isExternal = isExternalLink(dest)

  return (
    <>
      {isExternal ? (
        <a
          href={dest}
          className='link'
          target='_blank'
          rel='noopener noreferrer'
        >
          {label}
        </a>
      ) : (
        <ReactLink to={dest} className='link'>
          {label}
        </ReactLink>
      )}
    </>
  )
}

export default Link
