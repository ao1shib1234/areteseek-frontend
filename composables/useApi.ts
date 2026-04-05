const getStrapiUrl = () => {
  const config = useRuntimeConfig()
  return config.public.strapiUrl as string
}

/** Build full media URL from Strapi media object */
export const getStrapiImageUrl = (
  mediaObj: Record<string, unknown> | null | undefined
): string | null => {
  if (!mediaObj) return null
  const strapiUrl = getStrapiUrl()
  // Strapi v4/v5: media.url is relative (/uploads/...)
  const url = (mediaObj.url as string) ?? null
  if (!url) return null
  return url.startsWith('http') ? url : `${strapiUrl}${url}`
}

interface StrapiResponse<T> {
  data: T
  meta?: Record<string, unknown>
}

interface StrapiListResponse<T> {
  data: T[]
  meta?: Record<string, unknown>
}

export const useApi = () => {
  const STRAPI_URL = getStrapiUrl()

  // ── Homepage (single type) ─────────────────────────────────────────────────
  const fetchHomepage = async (): Promise<StrapiResponse<Record<string, unknown>>> => {
    try {
      const data = await $fetch<StrapiResponse<Record<string, unknown>>>(
        `${STRAPI_URL}/api/homepage?populate=heroImage,solutionsImage,productsImage,whyImage`
      )
      return data
    } catch (err) {
      console.warn('[useApi] fetchHomepage failed, using fallback:', err)
      return { data: {} }
    }
  }

  // ── Product Categories ─────────────────────────────────────────────────────
  const fetchProductCategories = async (): Promise<StrapiListResponse<Record<string, unknown>>> => {
    try {
      const data = await $fetch<StrapiListResponse<Record<string, unknown>>>(
        `${STRAPI_URL}/api/product-categories?populate=image&sort=sortOrder:asc`
      )
      return data
    } catch (err) {
      console.warn('[useApi] fetchProductCategories failed, using fallback:', err)
      return { data: [] }
    }
  }

  // ── News Articles ──────────────────────────────────────────────────────────
  const fetchNews = async (): Promise<StrapiListResponse<Record<string, unknown>>> => {
    try {
      const data = await $fetch<StrapiListResponse<Record<string, unknown>>>(
        `${STRAPI_URL}/api/news-articles?populate=image&sort=publishedAt:desc&pagination[limit]=3`
      )
      return data
    } catch (err) {
      console.warn('[useApi] fetchNews failed, using fallback:', err)
      return { data: [] }
    }
  }

  // ── Products (all) ────────────────────────────────────────────────────────
  const fetchProducts = async (): Promise<StrapiListResponse<Record<string, unknown>>> => {
    try {
      const data = await $fetch<StrapiListResponse<Record<string, unknown>>>(
        `${STRAPI_URL}/api/products?populate=image,category&sort=sortOrder:asc&pagination[limit]=100`
      )
      return data
    } catch (err) {
      console.warn('[useApi] fetchProducts failed, using fallback:', err)
      return { data: [] }
    }
  }

  // ── Products by category slug ──────────────────────────────────────────────
  const fetchProductsByCategory = async (categorySlug: string): Promise<StrapiListResponse<Record<string, unknown>>> => {
    try {
      const data = await $fetch<StrapiListResponse<Record<string, unknown>>>(
        `${STRAPI_URL}/api/products?populate=image,category&filters[category][slug][$eq]=${categorySlug}&sort=sortOrder:asc&pagination[limit]=50`
      )
      return data
    } catch (err) {
      console.warn('[useApi] fetchProductsByCategory failed, using fallback:', err)
      return { data: [] }
    }
  }

  return { fetchHomepage, fetchProductCategories, fetchNews, fetchProducts, fetchProductsByCategory }
}
