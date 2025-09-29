import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SEO_CONFIG from '@/lib/seo-config'

interface SeoData {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
}

export const useSEO = (seoData?: SeoData) => {
  const router = useRouter()
  
  useEffect(() => {
    // Update document title
    if (typeof document !== 'undefined') {
      document.title = seoData?.title 
        ? `${seoData.title} | ${SEO_CONFIG.siteTitle}`
        : SEO_CONFIG.siteTitle
    }
    
    // Update meta description
    if (typeof document !== 'undefined' && seoData?.description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData.description)
      } else {
        metaDescription = document.createElement('meta') as HTMLMetaElement
        metaDescription.name = 'description'
        metaDescription.content = seoData.description
        document.head.appendChild(metaDescription)
      }
    }
    
    // Update canonical URL
    if (typeof document !== 'undefined') {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      const canonicalUrl = seoData?.url || `${SEO_CONFIG.siteUrl}${router.asPath}`
      
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl)
      } else {
        canonical = document.createElement('link') as HTMLLinkElement
        canonical.rel = 'canonical'
        canonical.href = canonicalUrl
        document.head.appendChild(canonical)
      }
    }
  }, [seoData, router.asPath])
}

export default useSEO