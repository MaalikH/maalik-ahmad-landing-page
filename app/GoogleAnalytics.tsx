import { GoogleAnalytics as GA } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from '../lib/gtag'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '../lib/gtag'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      pageview(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
    }
  }, [pathname, searchParams])

  return <GA gaId={GA_MEASUREMENT_ID} dataLayerName="dataLayer" />
} 