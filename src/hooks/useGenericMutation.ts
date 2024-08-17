import {
  type MutationFunction,
  type UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

type QueryKeyType = string | readonly unknown[]
const useGenericMutation = <TData, TError = unknown, TVariables = unknown>(
  key: string | string[],
  func: MutationFunction<TData, TVariables>,
  params?: object | string,
  updater?: ((oldData: TData, newData: TVariables) => TData) | undefined,
  onSuccess?: (data: TData, variables: TVariables) => void,
  onError?: (err: TError) => void
): UseMutationResult<TData, TError, TVariables> => {
  const queryClient = useQueryClient()

  return useMutation<TData, TError, TVariables>({
    mutationFn: func,
    onMutate: async (dataPayload: TVariables) => {
      const queryKeyArray: QueryKeyType = Array.isArray(key)
        ? [...key, params].filter(Boolean)
        : [key, params].filter(Boolean)
      await queryClient.cancelQueries({ queryKey: queryKeyArray })
      const previousData = queryClient.getQueryData<TData>(queryKeyArray)

      queryClient.setQueryData<TData>(queryKeyArray, (oldData) => {
        return oldData && updater
          ? updater(oldData, dataPayload)
          : (dataPayload as unknown as TData)
      })

      return previousData
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([key, params], context)
      onError?.(err)
    },
    onSettled: () => {
      const queryKeyArray: QueryKeyType = Array.isArray(key)
        ? [...key, params].filter(Boolean)
        : [key, params].filter(Boolean)
      queryClient.invalidateQueries({ queryKey: queryKeyArray })
    },
    onSuccess: (data, variables, _) => {
      onSuccess?.(data, variables)
    },
  })
}

export { useGenericMutation }
