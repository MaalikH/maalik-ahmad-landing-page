import { GoogleAnalytics as GA } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from '../lib/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '../lib/gtag'

export default function GoogleAnalytics() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <GA gaId={GA_MEASUREMENT_ID} />
} 