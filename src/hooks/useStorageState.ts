/* eslint-disable react-hooks/exhaustive-deps */
import * as SecureStore from 'expo-secure-store'
import * as React from 'react'
import { Platform } from 'react-native'

type UseStateHook<T> = [[boolean, T | null], (value?: T | null) => void]

function useAsyncState<T>(
  initialValue: [boolean, T | null | undefined] = [true, undefined]
): UseStateHook<T> {
  return React.useReducer(
    (_state: [boolean, T | null], action: T | null = null) => [false, action],
    initialValue as never
  ) as UseStateHook<T>
}

export async function setStorageItemAsync<T>(
  key: string,
  value: T | null | undefined
) {
  const serializedValue =
    value === null || value === undefined ? null : JSON.stringify(value)

  if (Platform.OS === 'web') {
    try {
      if (serializedValue === null) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, serializedValue)
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e)
    }
  } else {
    if (serializedValue === null) {
      await SecureStore.deleteItemAsync(key)
    } else {
      await SecureStore.setItemAsync(key, serializedValue)
    }
  }
}

export function useStorageState<T>(key: string): UseStateHook<T> {
  // Public
  const [state, setState] = useAsyncState<T>()

  // Get
  React.useEffect(() => {
    const getStoredValue = async () => {
      if (Platform.OS === 'web') {
        try {
          if (typeof localStorage !== 'undefined') {
            const rawItem = localStorage.getItem(key)
            const item = rawItem ? (JSON.parse(rawItem) as T) : null
            setState(item)
          }
        } catch (e) {
          console.error('Local storage is unavailable:', e)
        }
      } else {
        const rawValue = await SecureStore.getItemAsync(key)
        const value = rawValue ? (JSON.parse(rawValue) as T) : null
        setState(value)
      }
    }

    getStoredValue()
  }, [key])

  // Set
  const setValue = React.useCallback(
    (value: T | null | undefined) => {
      const serializedValue = value ? JSON.stringify(value) : null
      if (Platform.OS === 'web') {
        if (serializedValue) localStorage.setItem(key, serializedValue)
        else localStorage.removeItem(key)
      } else {
        if (serializedValue) SecureStore.setItemAsync(key, serializedValue)
        else SecureStore.deleteItemAsync(key)
      }
      setState(value ?? null)
    },
    [key]
  )

  return [state, setValue]
}
