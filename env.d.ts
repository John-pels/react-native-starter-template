declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_BASE_URL: string
      EXPO_PUBLIC_TOKEN_KEY: string
    }
  }
}

export type {}
