import { useContext, useEffect, useState } from 'react'

import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'

import envInfo from '../../config/keycloak/initialization'
import { RouteConfigContext } from '../../config/routes/routeConfigContext'
import color from '../../theme/color'
import typography from '../../theme/typography'
import { HeadItems, HeadItemsRight, HeadWrapper } from './styles'

function Header({ marginLeft }: { marginLeft: number }) {
  const [title, setTitle] = useState<string>()
  const { pathname } = useLocation()
  const { routeConfig } = useContext(RouteConfigContext)

  useEffect(() => {
    const currentPath = routeConfig.children?.find(
      (route) => route.path === pathname
    )
    setTitle(currentPath?.title)
  }, [pathname])

  return (
    <HeadWrapper marginLeft={marginLeft} className="headWrapper">
      <HeadItems>{title}</HeadItems>
      <HeadItemsRight>
        {envInfo.isSecure && (
          <FontAwesomeIcon
            style={{
              color: color.fontPrimary,
              fontSize: typography.heading,
            }}
            onClick={envInfo.doLogout}
            icon={faSignOut}
          />
        )}
      </HeadItemsRight>
    </HeadWrapper>
  )
}

export default Header
